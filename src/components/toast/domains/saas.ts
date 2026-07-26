import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  ClipboardIcon,
  AddTeamIcon,
  UserAdd01Icon,
  Folder01Icon,
  File01Icon,
  Link01Icon,
  Key01Icon,
  CrownIcon,
  BellDotIcon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const saasToast = {
  // 작업
  task: {
    created: (data: { taskName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "작업이 생성되었습니다", description: data.taskName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: ClipboardIcon, ...o }),
    completed: (data: { taskName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "작업 완료", description: data.taskName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: ClipboardIcon, ...o }),
    deleted: (data: { taskName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "작업이 삭제되었습니다", description: data.taskName, status: "info", icon: ClipboardIcon, ...o }),
    statusChanged: (data: { taskName: string; newStatus: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "상태가 변경되었습니다", description: `${data.taskName} → ${data.newStatus}`, status: "info", icon: ClipboardIcon, ...o }),
    priorityChanged: (data: { taskName: string; priority: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "우선순위가 변경되었습니다", description: `${data.taskName}: ${data.priority}`, status: "info", icon: ClipboardIcon, ...o }),
    assigned: (data: { taskName: string; assignee: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "담당자가 배정되었습니다", description: `${data.taskName} → ${data.assignee}`, status: "info", icon: UserAdd01Icon, ...o }),
    deadlineSet: (data: { taskName: string; deadline: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "마감일이 설정되었습니다", description: `${data.taskName}: ${data.deadline}`, status: "info", icon: Calendar01Icon, ...o }),
    overdue: (data: { taskName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "마감일이 초과되었습니다", description: data.taskName, status: "warning", icon: Alert02Icon, categoryIcon: Calendar01Icon, ...o }),
  },

  // 팀/멤버
  team: {
    invited: (data: { email: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "초대가 전송되었습니다", description: data.email, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: AddTeamIcon, ...o }),
    joined: (data: { memberName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "새 멤버가 참여했습니다", description: data.memberName, status: "success", icon: AddTeamIcon, ...o }),
    removed: (data: { memberName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "멤버가 제거되었습니다", description: data.memberName, status: "info", icon: AddTeamIcon, ...o }),
    roleChanged: (data: { memberName: string; role: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "역할이 변경되었습니다", description: `${data.memberName} → ${data.role}`, status: "info", icon: AddTeamIcon, ...o }),
    permissionUpdated: (data: { memberName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "권한이 업데이트되었습니다", description: data.memberName, status: "info", icon: Key01Icon, ...o }),
  },

  // 프로젝트
  project: {
    created: (data: { projectName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "프로젝트가 생성되었습니다", description: data.projectName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Folder01Icon, ...o }),
    archived: (data: { projectName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "프로젝트가 아카이브되었습니다", description: data.projectName, status: "info", icon: Folder01Icon, ...o }),
    restored: (data: { projectName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "프로젝트가 복원되었습니다", description: data.projectName, status: "success", icon: Folder01Icon, ...o }),
    milestoneReached: (data: { milestoneName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "마일스톤 달성!", description: data.milestoneName, status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 문서/파일
  document: {
    uploaded: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "파일이 업로드되었습니다", description: data.fileName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: File01Icon, ...o }),
    deleted: (data: { fileName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "파일이 삭제되었습니다", description: data.fileName, status: "info", icon: File01Icon, ...o }),
    saved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "문서가 저장되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: File01Icon, ...o }),
    autoSaved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "자동 저장 완료", status: "info", icon: File01Icon, ...o }),
    conflictDetected: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "동시 편집 충돌이 감지되었습니다", status: "warning", icon: Alert02Icon, categoryIcon: File01Icon, actions: [{ label: "충돌 해결", onClick: () => {} }], ...o }),
    linkCopied: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "공유 링크가 복사되었습니다", status: "success", icon: Link01Icon, ...o }),
  },

  // 알림/연동
  integration: {
    slackConnected: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "Slack 연동이 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    webhookSet: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "웹훅이 설정되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    notificationSettingChanged: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "알림 설정이 변경되었습니다", status: "info", icon: BellDotIcon, ...o }),
    emailSent: (data: { recipient: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "이메일이 전송되었습니다", description: data.recipient, status: "success", icon: CheckmarkCircle02Icon, ...o }),
    apiKeyCreated: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "API 키가 생성되었습니다", status: "success", icon: Key01Icon, actions: [{ label: "키 복사", onClick: () => {} }], ...o }),
    apiKeyExpiring: (data: { expiresIn: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "API 키 만료 예정", description: `${data.expiresIn} 후 만료됩니다`, status: "warning", icon: Alert02Icon, categoryIcon: Key01Icon, ...o }),
  },

  // 구독/결제
  subscription: {
    upgraded: (data: { plan: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "플랜이 업그레이드되었습니다", description: `${data.plan} 플랜`, status: "success", icon: CrownIcon, ...o }),
    downgraded: (data: { plan: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "플랜이 다운그레이드되었습니다", description: `${data.plan} 플랜`, status: "info", icon: CrownIcon, ...o }),
    paymentFailed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "결제에 실패했습니다", description: "결제 수단을 확인해주세요", status: "error", icon: MultiplicationSignCircleIcon, actions: [{ label: "결제 수단 변경", onClick: () => {} }], ...o }),
    trialExpiring: (data: { daysLeft: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "무료 체험 종료 임박", description: `${data.daysLeft}일 남았습니다`, status: "warning", icon: Alert02Icon, categoryIcon: CrownIcon, actions: [{ label: "업그레이드", onClick: () => {} }], ...o }),
    usageLimitExceeded: (data: { resource: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "사용량 한도 초과", description: `${data.resource} 사용량이 한도를 초과했습니다`, status: "warning", icon: Alert02Icon, ...o }),
    invoiceIssued: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "saas", title: "인보이스가 발행되었습니다", description: data.amount, status: "info", icon: File01Icon, actions: [{ label: "인보이스 보기", onClick: () => {} }], ...o }),
  },
}
