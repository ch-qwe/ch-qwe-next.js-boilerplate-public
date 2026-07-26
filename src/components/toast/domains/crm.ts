import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Contact01Icon,
  UserAdd01Icon,
  UserGroupIcon,
  PipelineIcon,
  Analytics01Icon,
  Calendar01Icon,
  File01Icon,
  BotIcon,
  Link01Icon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const crmToast = {
  // 리드/고객
  lead: {
    created: (data: { leadName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "새 리드가 등록되었습니다", description: data.leadName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: UserAdd01Icon, ...o }),
    assigned: (data: { leadName: string; assignee: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "리드가 배정되었습니다", description: `${data.leadName} → ${data.assignee}`, status: "info", icon: UserAdd01Icon, ...o }),
    gradeChanged: (data: { leadName: string; grade: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "리드 등급이 변경되었습니다", description: `${data.leadName}: ${data.grade}`, status: "info", icon: Contact01Icon, ...o }),
    infoUpdated: (data: { customerName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "고객 정보가 업데이트되었습니다", description: data.customerName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Contact01Icon, ...o }),
    duplicateDetected: (data: { customerName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "중복 고객이 감지되었습니다", description: data.customerName, status: "warning", icon: Alert02Icon, categoryIcon: Contact01Icon, actions: [{ label: "확인하기", onClick: () => {} }], ...o }),
    merged: (data: { customerName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "고객 정보가 병합되었습니다", description: data.customerName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: UserGroupIcon, ...o }),
  },

  // 거래/파이프라인
  deal: {
    created: (data: { dealName: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "거래가 생성되었습니다", description: `${data.dealName}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: PipelineIcon, ...o }),
    stageMoved: (data: { dealName: string; stage: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "거래 단계가 이동되었습니다", description: `${data.dealName} → ${data.stage}`, status: "info", icon: PipelineIcon, ...o }),
    won: (data: { dealName: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "거래가 성사되었습니다!", description: `${data.dealName}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: PipelineIcon, ...o }),
    lost: (data: { dealName: string; reason: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "거래가 실패했습니다", description: `${data.dealName}: ${data.reason}`, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: PipelineIcon, ...o }),
    revenueUpdated: (data: { dealName: string; newAmount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "예상 매출이 업데이트되었습니다", description: `${data.dealName}: ${data.newAmount}`, status: "info", icon: Analytics01Icon, ...o }),
    amountChanged: (data: { dealName: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "거래 금액이 변경되었습니다", description: `${data.dealName}: ${data.amount}`, status: "info", icon: PipelineIcon, ...o }),
  },

  // 활동
  activity: {
    meetingScheduled: (data: { title: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "미팅이 예약되었습니다", description: `${data.title} | ${data.date}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Calendar01Icon, ...o }),
    callLogged: (data: { contactName: string; duration: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "통화 기록이 저장되었습니다", description: `${data.contactName}: ${data.duration}`, status: "success", icon: CheckmarkCircle02Icon, ...o }),
    emailSent: (data: { recipient: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "이메일이 발송되었습니다", description: data.recipient, status: "success", icon: CheckmarkCircle02Icon, ...o }),
    emailOpened: (data: { recipient: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "이메일이 열람되었습니다", description: data.recipient, status: "info", icon: InformationCircleIcon, ...o }),
    followUpReminder: (data: { contactName: string; task: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "후속 조치 리마인더", description: `${data.contactName}: ${data.task}`, status: "warning", icon: Alert02Icon, categoryIcon: Calendar01Icon, actions: [{ label: "완료 처리", onClick: () => {} }], ...o }),
    overdue: (data: { activityName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "활동 기한이 초과되었습니다", description: data.activityName, status: "error", icon: Alert02Icon, categoryIcon: Calendar01Icon, ...o }),
  },

  // 보고서
  report: {
    generated: (data: { reportName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "보고서가 생성되었습니다", description: data.reportName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Analytics01Icon, actions: [{ label: "보고서 보기", onClick: () => {} }], ...o }),
    exported: (data: { format: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "데이터 내보내기가 완료되었습니다", description: `${data.format} 형식`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: File01Icon, ...o }),
    dashboardUpdated: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "대시보드가 업데이트되었습니다", status: "info", icon: Analytics01Icon, ...o }),
    goalProgress: (data: { goal: string; progress: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "목표 달성률 업데이트", description: data.goal, status: "info", icon: Analytics01Icon, progress: { value: data.progress, showPercentage: true }, ...o }),
  },

  // 자동화
  automation: {
    workflowExecuted: (data: { workflowName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "워크플로우가 실행되었습니다", description: data.workflowName, status: "info", icon: BotIcon, ...o }),
    autoEmailSent: (data: { recipient: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "자동 이메일이 발송되었습니다", description: data.recipient, status: "info", icon: BotIcon, ...o }),
    triggerFired: (data: { triggerName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "트리거 조건이 충족되었습니다", description: data.triggerName, status: "info", icon: BotIcon, ...o }),
    automationError: (data: { workflowName: string; error: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "자동화 오류가 발생했습니다", description: `${data.workflowName}: ${data.error}`, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: BotIcon, ...o }),
  },

  // 연동
  integration: {
    calendarSynced: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "캘린더가 동기화되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Calendar01Icon, ...o }),
    emailConnected: (data: { email: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "이메일이 연동되었습니다", description: data.email, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Link01Icon, ...o }),
    dataImported: (data: { source: string; count: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "crm", title: "데이터 가져오기가 완료되었습니다", description: `${data.source}: ${data.count}건`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Link01Icon, ...o }),
  },
}
