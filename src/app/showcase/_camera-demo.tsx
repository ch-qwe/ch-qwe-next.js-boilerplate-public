"use client"

import * as React from "react"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  CameraRotated01Icon,
  Delete01Icon,
  Loading03Icon,
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

type Facing = "environment" | "user"

export function CameraDemo() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(false)
  const [starting, setStarting] = React.useState(false)
  const [facing, setFacing] = React.useState<Facing>("environment")
  const [snapshot, setSnapshot] = React.useState<string | null>(null)

  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const streamRef = React.useRef<MediaStream | null>(null)

  const stopStream = React.useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
    if (videoRef.current) videoRef.current.srcObject = null
    setActive(false)
  }, [])

  // 다이얼로그 닫힘/언마운트 시 스트림 정리 — 백그라운드 카메라 점유 방지.
  React.useEffect(() => {
    if (!open) stopStream()
  }, [open, stopStream])
  React.useEffect(() => () => stopStream(), [stopStream])

  const startCamera = async (preferred: Facing = facing) => {
    if (starting || active) return
    setStarting(true)

    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setStarting(false)
      toast.error("이 환경에서는 카메라를 열 수 없어요", {
        description: window.isSecureContext
          ? "브라우저가 카메라 API를 지원하지 않아요"
          : "HTTPS 또는 localhost에서 다시 시도해 주세요",
      })
      return
    }

    try {
      // 후면 우선이지만 desktop처럼 후면이 없으면 자동 fallback되도록 facingMode를 'ideal' 힌트로만 전달.
      let stream: MediaStream
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: preferred } },
          audio: false,
        })
      } catch {
        // 일부 브라우저는 facingMode 객체 자체를 거절 — 가장 느슨한 제약으로 재시도.
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        })
      }

      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        // iOS Safari는 명시적 play() 필요.
        await videoRef.current.play().catch(() => {
          // autoplay 차단 시에도 사용자가 한 번 인터랙션하면 재생됨
        })
      }
      setFacing(preferred)
      setActive(true)
      setSnapshot(null)
    } catch (err) {
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
      } else if (name === "NotFoundError") {
        toast.error("사용 가능한 카메라가 없어요", { description: subtitle })
      } else if (name === "NotReadableError") {
        toast.error("다른 앱이 카메라를 사용 중이에요", {
          description: "Zoom·Teams·다른 탭 등에서 카메라를 닫고 다시 시도해 주세요",
        })
      } else {
        toast.error("카메라를 열 수 없어요", { description: subtitle })
      }
    } finally {
      setStarting(false)
    }
  }

  const flipCamera = async () => {
    const next: Facing = facing === "environment" ? "user" : "environment"
    stopStream()
    // stop 직후 새 스트림을 잡으면 NotReadableError가 나는 기기가 있어 한 프레임 양보.
    await new Promise<void>((r) => requestAnimationFrame(() => r()))
    await startCamera(next)
  }

  const takeSnapshot = () => {
    const video = videoRef.current
    if (!video || !video.videoWidth || !video.videoHeight) {
      toast.error("아직 카메라가 준비되지 않았어요")
      return
    }
    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    // 전면 카메라는 좌우 반전된 미리보기를 캡처에도 반영해 사용자가 본 그대로 저장.
    if (facing === "user") {
      ctx.translate(canvas.width, 0)
      ctx.scale(-1, 1)
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    setSnapshot(canvas.toDataURL("image/jpeg", 0.92))
    toast.success("스냅샷을 캡처했어요")
  }

  const downloadSnapshot = () => {
    if (!snapshot) return
    const a = document.createElement("a")
    a.href = snapshot
    a.download = `snapshot-${Date.now()}.jpg`
    a.click()
  }

  return (
    <div className="space-y-3">
      <ResponsiveDialog open={open} onOpenChange={setOpen}>
        <ResponsiveDialogTrigger asChild>
          <Button size="lg" variant="outline">
            <HugeiconsIcon
              icon={Camera01Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            카메라 열기
          </Button>
        </ResponsiveDialogTrigger>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>카메라 미리보기</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              카메라 권한을 허용하면 실시간 영상을 표시해요. 스냅샷을 캡처하고
              저장할 수 있습니다. HTTPS 또는 localhost에서만 동작해요.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogBody className="space-y-4">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg bg-black">
              <video
                ref={videoRef}
                className={
                  "absolute inset-0 size-full object-cover " +
                  // 전면 카메라는 셀카처럼 좌우 반전 — 사용자가 거울 보듯 자연스럽게
                  (facing === "user" ? "scale-x-[-1]" : "")
                }
                playsInline
                muted
              />
              {!active && !starting && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-white/70">
                  카메라가 꺼져 있어요
                </div>
              )}
              {starting && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-white/70">
                  <HugeiconsIcon
                    icon={Loading03Icon}
                    strokeWidth={2}
                    className="mr-1.5 size-4 animate-spin"
                  />
                  카메라 여는 중…
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-2">
              {!active ? (
                <Button
                  type="button"
                  size="lg"
                  onClick={() => startCamera()}
                  disabled={starting}
                >
                  <HugeiconsIcon
                    icon={starting ? Loading03Icon : Camera01Icon}
                    strokeWidth={2}
                    className={starting ? "animate-spin" : undefined}
                    data-icon="inline-start"
                  />
                  {starting ? "여는 중…" : "카메라 시작"}
                </Button>
              ) : (
                <>
                  <Button
                    type="button"
                    size="lg"
                    onClick={takeSnapshot}
                    disabled={starting}
                  >
                    <HugeiconsIcon
                      icon={Camera01Icon}
                      strokeWidth={2}
                      data-icon="inline-start"
                    />
                    스냅샷
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={flipCamera}
                    disabled={starting}
                  >
                    <HugeiconsIcon
                      icon={CameraRotated01Icon}
                      strokeWidth={2}
                      data-icon="inline-start"
                    />
                    {facing === "environment" ? "전면" : "후면"}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={stopStream}
                  >
                    정지
                  </Button>
                </>
              )}
            </div>

            {snapshot && (
              <div className="space-y-2 rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-muted-foreground">
                    캡처된 스냅샷
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={downloadSnapshot}
                    >
                      다운로드
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setSnapshot(null)}
                      aria-label="스냅샷 삭제"
                    >
                      <HugeiconsIcon icon={Delete01Icon} strokeWidth={2} />
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={snapshot}
                    alt="캡처된 스냅샷"
                    fill
                    sizes="(max-width: 640px) 90vw, 400px"
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
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
    </div>
  )
}
