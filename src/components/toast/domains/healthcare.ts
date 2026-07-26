import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Hospital01Icon,
  Medicine01Icon,
  StethoscopeIcon,
  Appointment01Icon,
  Calendar01Icon,
  HealthIcon,
  Pulse01Icon,
  Dna01Icon,
  AmbulanceIcon,
  Shield01Icon,
  CreditCardIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const healthcareToast = {
  // 예약
  appointment: {
    confirmed: (data: { doctor: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "예약이 확인되었습니다", description: `${data.doctor} | ${data.date}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Appointment01Icon, ...o }),
    changed: (data: { newDate: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "예약이 변경되었습니다", description: `변경된 일시: ${data.newDate}`, status: "info", icon: Appointment01Icon, ...o }),
    cancelled: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "예약이 취소되었습니다", status: "info", icon: Appointment01Icon, ...o }),
    reminder: (data: { doctor: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "진료 예약 리마인더", description: `${data.doctor} | ${data.date}`, status: "warning", icon: Alert02Icon, categoryIcon: Calendar01Icon, ...o }),
    waitingNumberChanged: (data: { number: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "대기 순번이 변경되었습니다", description: `현재 ${data.number}번`, status: "info", icon: Appointment01Icon, ...o }),
    checkedIn: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "당일 접수가 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Hospital01Icon, ...o }),
  },

  // 진료
  consultation: {
    started: (data: { doctor: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "진료가 시작되었습니다", description: data.doctor, status: "info", icon: StethoscopeIcon, ...o }),
    completed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "진료가 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: StethoscopeIcon, ...o }),
    telemedConnecting: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "비대면 진료 연결 중", status: "loading", icon: Loading03Icon, categoryIcon: StethoscopeIcon, ...o }),
    prescriptionIssued: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "처방전이 발행되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Medicine01Icon, actions: [{ label: "처방전 보기", onClick: () => {} }], ...o }),
    diagnosisCertIssued: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "진단서가 발급되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Hospital01Icon, ...o }),
    testResultReady: (data: { testName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "검사 결과가 도착했습니다", description: data.testName, status: "info", icon: Dna01Icon, actions: [{ label: "결과 보기", onClick: () => {} }], ...o }),
  },

  // 약/처방
  prescription: {
    medicationReminder: (data: { medicineName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "약 복용 시간입니다", description: data.medicineName, status: "warning", icon: Alert02Icon, categoryIcon: Medicine01Icon, actions: [{ label: "복용 완료", onClick: () => {} }], ...o }),
    ready: (data: { pharmacy: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "처방약이 준비되었습니다", description: data.pharmacy, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Medicine01Icon, ...o }),
    pickedUp: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "약 수령이 확인되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Medicine01Icon, ...o }),
    refillAvailable: (data: { medicineName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "리필이 가능합니다", description: data.medicineName, status: "info", icon: Medicine01Icon, actions: [{ label: "리필 요청", onClick: () => {} }], ...o }),
    recordSaved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "복약 기록이 저장되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 건강 기록
  healthRecord: {
    synced: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "건강 데이터가 동기화되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Pulse01Icon, ...o }),
    abnormalDetected: (data: { metric: string; value: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "이상 수치가 감지되었습니다", description: `${data.metric}: ${data.value}`, status: "error", icon: Alert02Icon, categoryIcon: Pulse01Icon, actions: [{ label: "상세 보기", onClick: () => {} }], ...o }),
    goalAchieved: (data: { goal: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "목표를 달성했습니다!", description: data.goal, status: "success", icon: HealthIcon, ...o }),
    saved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "건강 기록이 저장되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: HealthIcon, ...o }),
    exported: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "데이터 내보내기가 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 보험/결제
  insurance: {
    coverageConfirmed: (data: { coverage: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "보험 적용이 확인되었습니다", description: data.coverage, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Shield01Icon, ...o }),
    copayNotice: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "본인부담금 안내", description: data.amount, status: "info", icon: CreditCardIcon, ...o }),
    paymentCompleted: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "결제가 완료되었습니다", description: data.amount, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    receiptIssued: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "healthcare", title: "영수증이 발행되었습니다", status: "info", icon: Hospital01Icon, actions: [{ label: "영수증 보기", onClick: () => {} }], ...o }),
  },
}
