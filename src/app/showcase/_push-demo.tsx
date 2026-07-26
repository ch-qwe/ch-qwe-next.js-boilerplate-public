"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Loading03Icon,
  Notification01Icon,
  SentIcon,
} from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useSession } from "@/lib/auth-client"
import { usePushSubscription } from "@/hooks/use-push-subscription"

const PHASE_LABEL: Record<string, string> = {
  preparing: "서비스 워커 준비 중…",
  awaiting_permission: "브라우저 상단의 권한 안내에서 '허용'을 눌러주세요",
  subscribing: "푸시 서비스에 기기 등록 중…",
  saving: "서버에 구독 저장 중…",
  unsubscribing: "구독 해지 중…",
}

/**
 * Web Push 데모 — 구독 토글 + 본인 디바이스 전체로 테스트 발송.
 * 로그인 필수(구독이 유저에 귀속됨). dev 모드에서는 sw.js가 빌드되지 않아
 * production 빌드(pnpm build && pnpm start)에서만 실제 구독이 가능.
 */
export function PushDemo() {
  const { data: session, isPending: sessionLoading } = useSession()
  const {
    permission,
    isSubscribed,
    isLoading,
    isIosNotInstalled,
    isServiceWorkerMissing,
    phase,
    subscribe,
    unsubscribe,
  } = usePushSubscription()

  const [title, setTitle] = React.useState("테스트 알림")
  const [body, setBody] = React.useState("Web Push가 정상 동작하고 있어요 🎉")
  const [url, setUrl] = React.useState("/showcase")
  const [sending, setSending] = React.useState(false)

  const busy = phase !== "idle"

  const handleToggle = async (next: boolean) => {
    if (next) {
      const res = await subscribe()
      if (res.ok) {
        toast.success("푸시 구독이 등록됐어요")
      } else if (res.reason === "denied") {
        toast.error("알림 권한이 거부됐어요. 브라우저 설정에서 허용해주세요.")
      } else if (res.reason === "sw_missing") {
        toast.error("서비스 워커가 없어요. production 빌드에서 시도해주세요.")
      } else {
        toast.error(`구독에 실패했어요 (${res.reason})`)
      }
    } else {
      await unsubscribe()
      toast.info("푸시 구독을 해지했어요")
    }
  }

  const handleSend = async () => {
    setSending(true)
    try {
      const res = await fetch("/api/push/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, body, url }),
      })
      const json = (await res.json()) as {
        error?: string
        success?: number
        failed?: number
        expired?: number
        total?: number
      }
      if (!res.ok) {
        if (json.error === "no_subscription") {
          toast.error("구독된 디바이스가 없어요. 먼저 구독을 켜주세요.")
        } else if (res.status === 401) {
          toast.error("로그인이 필요해요.")
        } else {
          toast.error("발송에 실패했어요.")
        }
        return
      }
      toast.success(
        `발송 완료 — 성공 ${json.success}건 / 실패 ${json.failed}건 / 만료 정리 ${json.expired}건`,
      )
    } finally {
      setSending(false)
    }
  }

  if (sessionLoading) {
    return (
      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed">
        <HugeiconsIcon
          icon={Loading03Icon}
          className="size-5 animate-spin text-muted-foreground"
        />
      </div>
    )
  }

  if (!session) {
    return (
      <Alert>
        <HugeiconsIcon icon={Notification01Icon} strokeWidth={2} />
        <AlertTitle>로그인이 필요해요</AlertTitle>
        <AlertDescription>
          <p className="text-sm">
            푸시 구독은 유저 단위로 저장돼요.{" "}
            <Link href="/auth" className="font-medium underline">
              로그인 페이지
            </Link>
            에서 로그인한 뒤 다시 시도해주세요.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {/* 상태 뱃지 */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={isSubscribed ? "default" : "secondary"}>
          {isSubscribed ? "구독 중" : "미구독"}
        </Badge>
        <Badge variant="outline">권한: {permission}</Badge>
        <Badge variant="outline">{session.user.email}</Badge>
      </div>

      {isServiceWorkerMissing ? (
        <Alert variant="destructive">
          <AlertTitle>서비스 워커가 등록되지 않았어요</AlertTitle>
          <AlertDescription>
            <p className="text-sm">
              dev 모드에서는 sw.js가 빌드되지 않아요. <code>pnpm build</code>{" "}
              후 <code>pnpm start</code>로 production 빌드에서 테스트해주세요.
            </p>
          </AlertDescription>
        </Alert>
      ) : null}

      {isIosNotInstalled ? (
        <Alert>
          <AlertTitle>iOS는 홈 화면 추가가 필요해요</AlertTitle>
          <AlertDescription>
            <p className="text-sm">
              iOS Safari는 공유 → &ldquo;홈 화면에 추가&rdquo;로 설치된 PWA에서만
              웹 푸시를 지원해요.
            </p>
          </AlertDescription>
        </Alert>
      ) : null}

      {/* 구독 토글 */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="push-toggle">이 기기에서 푸시 받기</Label>
          <p className="text-sm text-muted-foreground">
            {busy
              ? (PHASE_LABEL[phase] ?? "처리 중…")
              : "구독하면 이 브라우저가 내 계정의 발송 대상에 추가돼요."}
          </p>
        </div>
        <Switch
          id="push-toggle"
          checked={isSubscribed}
          disabled={isLoading || busy || permission === "unsupported"}
          onCheckedChange={handleToggle}
        />
      </div>

      {/* 테스트 발송 */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">
          내 모든 구독 디바이스로 테스트 발송
        </p>
        <div className="space-y-2">
          <Label htmlFor="push-title">제목</Label>
          <Input
            id="push-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="push-body">내용</Label>
          <Textarea
            id="push-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={2}
            maxLength={500}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="push-url">클릭 시 이동 URL</Label>
          <Input
            id="push-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="/showcase"
          />
        </div>
        <Button
          size="lg"
          className="w-full"
          onClick={handleSend}
          disabled={sending || !title.trim() || !body.trim()}
        >
          {sending ? (
            <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
          ) : (
            <HugeiconsIcon icon={SentIcon} strokeWidth={2} />
          )}
          테스트 푸시 보내기
        </Button>
        <p className="text-xs text-muted-foreground">
          같은 계정으로 구독한 모든 브라우저·기기에 동시에 발송돼요. 만료된
          구독(410/404)은 발송 시 자동 정리됩니다.
        </p>
      </div>
    </div>
  )
}
