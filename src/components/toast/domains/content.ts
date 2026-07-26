import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Upload01Icon,
  Download01Icon,
  PlayIcon,
  Video01Icon,
  MusicNote01Icon,
  BrushIcon,
  Calendar01Icon,
  Flag01Icon,
  Comment01Icon,
  CreditCardIcon,
  FavouriteIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const contentToast = {
  // 업로드
  upload: {
    started: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "업로드가 시작되었습니다", description: data.fileName, status: "loading", icon: Loading03Icon, categoryIcon: Upload01Icon, ...o }),
    progress: (data: { fileName: string; progress: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "업로드 중", description: data.fileName, status: "loading", icon: Loading03Icon, categoryIcon: Upload01Icon, progress: { value: data.progress, showPercentage: true }, ...o }),
    completed: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "업로드가 완료되었습니다", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Upload01Icon, ...o }),
    failed: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "업로드에 실패했습니다", description: data.fileName, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Upload01Icon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    sizeExceeded: (data: { maxSize: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "용량이 초과되었습니다", description: `최대 ${data.maxSize}`, status: "warning", icon: Alert02Icon, categoryIcon: Upload01Icon, ...o }),
    unsupportedFormat: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "지원하지 않는 형식입니다", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Upload01Icon, ...o }),
    transcodingComplete: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "트랜스코딩이 완료되었습니다", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Video01Icon, ...o }),
  },

  // 콘텐츠 관리
  management: {
    published: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "콘텐츠가 게시되었습니다", description: data.title, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: PlayIcon, ...o }),
    unpublished: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "비공개로 전환되었습니다", description: data.title, status: "info", icon: InformationCircleIcon, ...o }),
    scheduled: (data: { title: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "예약 발행이 설정되었습니다", description: `${data.title} | ${data.date}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Calendar01Icon, ...o }),
    deleted: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "콘텐츠가 삭제되었습니다", description: data.title, status: "info", icon: InformationCircleIcon, ...o }),
    drafted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "임시저장되었습니다", status: "info", icon: BrushIcon, ...o }),
    versionRestored: (data: { version: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "이전 버전이 복원되었습니다", description: `버전: ${data.version}`, status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 구독
  subscription: {
    subscribed: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "구독 완료", description: data.channelName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: FavouriteIcon, ...o }),
    unsubscribed: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "구독이 해지되었습니다", description: data.channelName, status: "info", icon: FavouriteIcon, ...o }),
    newContentPublished: (data: { creator: string; title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "새 콘텐츠가 발행되었습니다", description: `${data.creator}: ${data.title}`, status: "info", icon: PlayIcon, actions: [{ label: "보러 가기", onClick: () => {} }], ...o }),
    notificationSet: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "알림이 설정되었습니다", description: data.channelName, status: "info", icon: InformationCircleIcon, ...o }),
    membershipJoined: (data: { channelName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "멤버십에 가입했습니다", description: data.channelName, status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 수익화
  monetization: {
    adRevenueSettled: (data: { amount: string; period: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "광고 수익이 정산되었습니다", description: `${data.period}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    donationReceived: (data: { donor: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "후원을 받았습니다!", description: `${data.donor}: ${data.amount}`, status: "success", icon: FavouriteIcon, ...o }),
    paidContentPurchased: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "유료 콘텐츠가 구매되었습니다", description: data.title, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    bankAccountRegistered: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "정산 계좌가 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
  },

  // 다운로드
  download: {
    started: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "다운로드가 시작되었습니다", description: data.fileName, status: "loading", icon: Loading03Icon, categoryIcon: Download01Icon, ...o }),
    completed: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "다운로드가 완료되었습니다", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Download01Icon, ...o }),
    offlineSaved: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "오프라인 저장이 완료되었습니다", description: data.title, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Download01Icon, ...o }),
    storageInsufficient: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "저장 공간이 부족합니다", status: "warning", icon: Alert02Icon, categoryIcon: Download01Icon, ...o }),
  },

  // 커뮤니티
  community: {
    commented: (data: { userName: string; preview: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: `${data.userName}님이 댓글을 달았습니다`, description: data.preview, status: "info", icon: Comment01Icon, actions: [{ label: "답글", onClick: () => {} }], ...o }),
    commentDeleted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "댓글이 삭제되었습니다", status: "info", icon: Comment01Icon, ...o }),
    reported: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "신고가 접수되었습니다", description: "검토 후 처리됩니다", status: "info", icon: Flag01Icon, ...o }),
    copyrightWarning: (data: { contentTitle: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "저작권 경고", description: data.contentTitle, status: "error", icon: Alert02Icon, actions: [{ label: "자세히 보기", onClick: () => {} }], ...o }),
    guidelineViolation: (data: { reason: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "content", title: "커뮤니티 가이드라인 위반", description: data.reason, status: "error", icon: Flag01Icon, ...o }),
  },
}
