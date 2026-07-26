import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Message01Icon,
  Chat01Icon,
  CallAddIcon,
  Video01Icon,
  Mic01Icon,
  HeadphonesIcon,
  Attachment01Icon,
  PinIcon,
  BotIcon,
  Wifi01Icon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const messagingToast = {
  // 메시지
  message: {
    received: (data: { sender: string; preview: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: `${data.sender}님의 새 메시지`, description: data.preview, status: "info", icon: Message01Icon, actions: [{ label: "답장", onClick: () => {} }], ...o }),
    sent: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "메시지가 전송되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Message01Icon, ...o }),
    failed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "메시지 전송에 실패했습니다", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Message01Icon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    deleted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "메시지가 삭제되었습니다", status: "info", icon: Message01Icon, ...o }),
    edited: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "메시지가 수정되었습니다", status: "info", icon: Message01Icon, ...o }),
    read: (data: { chatName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "읽음 확인", description: data.chatName, status: "info", icon: CheckmarkCircle02Icon, ...o }),
    scheduled: (data: { date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "예약 메시지가 설정되었습니다", description: data.date, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Message01Icon, ...o }),
  },

  // 통화
  call: {
    connecting: (data: { callee: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "통화 연결 중", description: data.callee, status: "loading", icon: Loading03Icon, categoryIcon: CallAddIcon, ...o }),
    ended: (data: { duration: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "통화가 종료되었습니다", description: `통화 시간: ${data.duration}`, status: "info", icon: CallAddIcon, ...o }),
    missed: (data: { caller: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "부재중 전화", description: data.caller, status: "warning", icon: Alert02Icon, categoryIcon: CallAddIcon, actions: [{ label: "콜백", onClick: () => {} }], ...o }),
    screenShareStarted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "화면 공유가 시작되었습니다", status: "info", icon: Video01Icon, ...o }),
    recordingStarted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "녹화가 시작되었습니다", status: "info", icon: Mic01Icon, ...o }),
    recordingSaved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "녹화가 저장되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Mic01Icon, ...o }),
  },

  // 채널/그룹
  channel: {
    created: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "채널이 생성되었습니다", description: data.channelName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Chat01Icon, ...o }),
    archived: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "채널이 아카이브되었습니다", description: data.channelName, status: "info", icon: Chat01Icon, ...o }),
    memberAdded: (data: { memberName: string; channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: `${data.memberName}님이 추가되었습니다`, description: data.channelName, status: "info", icon: Chat01Icon, ...o }),
    memberLeft: (data: { memberName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: `${data.memberName}님이 퇴장했습니다`, status: "info", icon: Chat01Icon, ...o }),
    topicChanged: (data: { channelName: string; topic: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "채널 주제가 변경되었습니다", description: `${data.channelName}: ${data.topic}`, status: "info", icon: Chat01Icon, ...o }),
    announcementPosted: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "공지가 등록되었습니다", description: data.channelName, status: "info", icon: PinIcon, ...o }),
  },

  // 파일
  file: {
    shared: (data: { fileName: string; progress?: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "파일 전송 완료", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Attachment01Icon, ...(data.progress !== undefined ? { progress: { value: data.progress, showPercentage: true } } : {}), ...o }),
    downloaded: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "파일 다운로드 완료", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Attachment01Icon, ...o }),
    sizeExceeded: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "파일 용량이 초과되었습니다", status: "warning", icon: Alert02Icon, categoryIcon: Attachment01Icon, ...o }),
    unsupportedFormat: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "지원하지 않는 파일 형식입니다", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Attachment01Icon, ...o }),
  },

  // 상태
  status: {
    connected: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "연결되었습니다", status: "success", icon: Wifi01Icon, ...o }),
    disconnected: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "연결이 끊겼습니다", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Wifi01Icon, ...o }),
    reconnecting: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "재접속 중...", status: "loading", icon: Loading03Icon, categoryIcon: Wifi01Icon, ...o }),
    statusChanged: (data: { status: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "상태가 변경되었습니다", description: data.status, status: "info", icon: InformationCircleIcon, ...o }),
    dndEnabled: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "방해 금지 모드가 활성화되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
  },

  // 봇/연동
  bot: {
    added: (data: { botName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "봇이 추가되었습니다", description: data.botName, status: "success", icon: BotIcon, ...o }),
    workflowExecuted: (data: { workflowName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "워크플로우가 실행되었습니다", description: data.workflowName, status: "info", icon: BotIcon, ...o }),
    appConnected: (data: { appName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "앱이 연동되었습니다", description: data.appName, status: "success", icon: CheckmarkCircle02Icon, ...o }),
    notificationSettingChanged: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "messaging", title: "알림 설정이 변경되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
  },
}
