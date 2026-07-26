"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  Loading03Icon,
  QrCodeIcon,
} from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * 카메라로 찍은 한 컷 이미지에서 QR 디코딩.
 * 4K 카메라 이미지는 그대로 캔버스에 넣으면 느리므로 1600px 이하로 비율 유지 축소.
 */
async function decodeQrFromFile(file: File): Promise<string | null> {
  const { default: jsQR } = await import("jsqr")
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const maxSize = 1600
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height))
        const w = Math.max(1, Math.round(img.width * scale))
        const h = Math.max(1, Math.round(img.height * scale))
        const canvas = document.createElement("canvas")
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext("2d", { willReadFrequently: true })
        if (!ctx) return resolve(null)
        ctx.drawImage(img, 0, 0, w, h)
        const imageData = ctx.getImageData(0, 0, w, h)
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        })
        resolve(code?.data ?? null)
      }
      img.onerror = () => resolve(null)
      img.src = reader.result as string
    }
    reader.onerror = () => resolve(null)
    reader.readAsDataURL(file)
  })
}

export function QrScannerDemo() {
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState<string>("")

  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const cameraInputRef = React.useRef<HTMLInputElement>(null)
  const liveScannerRef = React.useRef<{
    stop: () => void
    destroy: () => void
  } | null>(null)

  const [liveMode, setLiveMode] = React.useState(false)
  const [liveStarting, setLiveStarting] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)

  const stopLiveScan = React.useCallback(() => {
    if (liveScannerRef.current) {
      try {
        liveScannerRef.current.stop()
        liveScannerRef.current.destroy()
      } catch {
        // noop
      }
      liveScannerRef.current = null
    }
    setLiveMode(false)
  }, [])

  // 다이얼로그가 닫히면 스트림 정리 — 백그라운드에서 카메라가 켜진 채 남지 않게.
  React.useEffect(() => {
    if (!open) stopLiveScan()
  }, [open, stopLiveScan])
  React.useEffect(() => {
    return () => {
      if (liveScannerRef.current) {
        try {
          liveScannerRef.current.stop()
          liveScannerRef.current.destroy()
        } catch {
          // noop
        }
        liveScannerRef.current = null
      }
    }
  }, [])

  const handleCameraCapture = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    setScanning(true)
    try {
      const text = await decodeQrFromFile(file)
      if (!text) {
        toast.error("QR 코드를 인식하지 못했어요", {
          description: "더 가까이서 또렷하게 다시 찍어 주세요",
        })
        return
      }
      setResult(text)
      toast.success("QR을 인식했어요")
    } finally {
      setScanning(false)
    }
  }

  const startLiveScan = async () => {
    if (liveStarting || liveMode) return
    setLiveStarting(true)

    // ── 1) Secure context · API 가드
    //    HTTPS/localhost가 아니거나 mediaDevices가 없으면 권한 prompt가 안 뜸 → 한 컷 폴백.
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setLiveStarting(false)
      toast.error("이 환경에서는 카메라를 열 수 없어요", {
        description: window.isSecureContext
          ? "브라우저가 카메라 API를 지원하지 않아요"
          : "HTTPS 또는 localhost에서 다시 시도해 주세요",
      })
      cameraInputRef.current?.click()
      return
    }

    // ── 2) user gesture 안에서 권한 prime
    //    iOS Safari PWA는 getUserMedia를 클릭 직후 짧은 윈도우 안에서 호출해야 prompt가 뜸.
    //    여기서 미리 한 번 stream을 받아 origin에 권한을 박아두면 qr-scanner가 재호출할 때 prompt 없이 통과.
    //    데스크톱엔 후면 카메라가 없어 facingMode: "environment"가 OverconstrainedError를 던질 수 있으므로
    //    prime은 가장 느슨한 video: true 로 호출. 어느 카메라든 권한만 받으면 qr-scanner가 알아서 선택.
    let primed: MediaStream | null = null
    try {
      primed = await navigator.mediaDevices.getUserMedia({ video: true })
    } catch (err) {
      setLiveStarting(false)
      const name =
        err && typeof err === "object" && "name" in err
          ? (err as { name?: string }).name
          : undefined
      const message = err instanceof Error ? err.message : undefined
      const subtitle = [name, message].filter(Boolean).join(" — ") || undefined

      if (name === "NotAllowedError") {
        toast.error("카메라 권한이 거부되었어요", {
          description:
            "브라우저 주소창의 카메라 아이콘에서 권한을 허용한 뒤 다시 시도해 주세요",
        })
      } else if (name === "NotFoundError" || name === "OverconstrainedError") {
        toast.error("사용 가능한 카메라가 없어요", {
          description: subtitle,
        })
      } else if (name === "NotReadableError") {
        toast.error("다른 앱이 카메라를 사용 중이에요", {
          description: "Zoom·Teams·다른 탭 등에서 카메라를 닫고 다시 시도해 주세요",
        })
      } else {
        toast.error("카메라를 열 수 없어요", {
          description: subtitle,
        })
      }
      return
    } finally {
      primed?.getTracks().forEach((t) => t.stop())
    }

    // ── 3) qr-scanner 모듈 로드 + 스캐너 부착 (lazy import로 초기 번들 영향 0)
    try {
      const { default: QrScanner } = await import("qr-scanner")
      setLiveMode(true)
      await new Promise<void>((r) => requestAnimationFrame(() => r()))
      if (!videoRef.current) throw new Error("VIDEO_NOT_MOUNTED")

      const scanner = new QrScanner(
        videoRef.current,
        (r) => {
          scanner.stop()
          try {
            scanner.destroy()
          } catch {
            // noop
          }
          liveScannerRef.current = null
          setLiveMode(false)
          setResult(r.data)
          toast.success("QR을 인식했어요")
        },
        {
          preferredCamera: "environment",
          highlightScanRegion: true,
          highlightCodeOutline: true,
          returnDetailedScanResult: true,
        },
      )
      liveScannerRef.current = scanner
      await scanner.start()
    } catch (err) {
      setLiveMode(false)
      liveScannerRef.current = null
      toast.error("QR 스캔을 시작하지 못했어요", {
        description: err instanceof Error ? err.message : undefined,
      })
    } finally {
      setLiveStarting(false)
    }
  }

  return (
    <div className="space-y-3">
      <ResponsiveDialog open={open} onOpenChange={setOpen}>
        <ResponsiveDialogTrigger asChild>
          <Button size="lg" variant="outline">
            <HugeiconsIcon
              icon={QrCodeIcon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            QR 스캐너 열기
          </Button>
        </ResponsiveDialogTrigger>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>QR 코드 스캔</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              카메라 권한을 허용하면 실시간으로 QR을 인식해요. HTTPS 또는
              localhost에서만 동작합니다.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogBody className="space-y-4">
            {/* 폴백 — 라이브 스캔이 권한 거부/카메라 없음으로 실패하면 한 컷 캡처로 우회 */}
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleCameraCapture}
            />

            {liveMode ? (
              <div className="space-y-3">
                <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg bg-black">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 size-full object-cover"
                    playsInline
                    muted
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  QR을 사각형 안에 맞춰 주세요
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={stopLiveScan}
                >
                  취소
                </Button>
              </div>
            ) : (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={startLiveScan}
                  disabled={scanning || liveStarting}
                >
                  <HugeiconsIcon
                    icon={
                      scanning || liveStarting ? Loading03Icon : Camera01Icon
                    }
                    strokeWidth={2}
                    className={
                      scanning || liveStarting ? "animate-spin" : undefined
                    }
                    data-icon="inline-start"
                  />
                  {scanning
                    ? "QR 인식 중…"
                    : liveStarting
                      ? "카메라 여는 중…"
                      : "QR 카메라로 스캔"}
                </Button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-px flex-1 bg-border" aria-hidden />
                  또는 한 장 캡처
                  <span className="h-px flex-1 bg-border" aria-hidden />
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => cameraInputRef.current?.click()}
                  disabled={scanning || liveStarting}
                >
                  <HugeiconsIcon
                    icon={Camera01Icon}
                    strokeWidth={2}
                    data-icon="inline-start"
                  />
                  사진으로 스캔
                </Button>

                <div className="grid gap-1.5">
                  <Label htmlFor="qr-result">인식 결과</Label>
                  <Input
                    id="qr-result"
                    readOnly
                    value={result}
                    placeholder="아직 인식된 QR이 없어요"
                  />
                </div>
              </>
            )}
          </ResponsiveDialogBody>

          <ResponsiveDialogFooter>
            <ResponsiveDialogClose asChild>
              <Button type="button" variant="outline" size="lg">
                닫기
              </Button>
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </ResponsiveDialogContent>
      </ResponsiveDialog>

      {result && (
        <div className="rounded-md border bg-muted/30 p-3 text-sm">
          <div className="text-xs font-medium text-muted-foreground">
            마지막 인식 결과
          </div>
          <div className="mt-1 break-all">{result}</div>
        </div>
      )}
    </div>
  )
}
