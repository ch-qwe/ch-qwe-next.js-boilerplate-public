import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Money01Icon,
  MoneyReceive01Icon,
  MoneySend01Icon,
  BankIcon,
  Shield01Icon,
  LockIcon,
  CreditCardIcon,
  Coins01Icon,
  PercentIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const fintechToast = {
  // 송금/이체
  transfer: {
    sent: (data: { amount: string; recipient: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "송금이 완료되었습니다", description: `${data.recipient}에게 ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: MoneySend01Icon, ...o }),
    received: (data: { amount: string; sender: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "입금이 확인되었습니다", description: `${data.sender}님으로부터 ${data.amount}`, status: "success", icon: MoneyReceive01Icon, ...o }),
    failed: (data: { reason: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "송금에 실패했습니다", description: data.reason, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: MoneySend01Icon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    scheduled: (data: { amount: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "예약 이체가 등록되었습니다", description: `${data.amount} | ${data.date}`, status: "info", icon: MoneySend01Icon, ...o }),
    limitExceeded: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "이체 한도를 초과했습니다", description: "한도 변경 후 다시 시도해주세요", status: "warning", icon: Alert02Icon, categoryIcon: MoneySend01Icon, ...o }),
    feeNotice: (data: { fee: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "수수료 안내", description: `이체 수수료: ${data.fee}`, status: "info", icon: InformationCircleIcon, ...o }),
  },

  // 결제
  payment: {
    approved: (data: { amount: string; merchant: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "결제가 승인되었습니다", description: `${data.merchant}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    cancelled: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "결제가 취소되었습니다", description: data.amount, status: "info", icon: CreditCardIcon, ...o }),
    autoPayRegistered: (data: { service: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "자동 결제가 등록되었습니다", description: data.service, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    autoPayCancelled: (data: { service: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "자동 결제가 해지되었습니다", description: data.service, status: "info", icon: CreditCardIcon, ...o }),
    methodChanged: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "결제 수단이 변경되었습니다", status: "info", icon: CreditCardIcon, ...o }),
  },

  // 계좌
  account: {
    insufficientBalance: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "잔액이 부족합니다", status: "warning", icon: Alert02Icon, categoryIcon: BankIcon, ...o }),
    depositConfirmed: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "입금이 확인되었습니다", description: data.amount, status: "success", icon: MoneyReceive01Icon, ...o }),
    withdrawalCompleted: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "출금이 완료되었습니다", description: data.amount, status: "info", icon: MoneySend01Icon, ...o }),
    connected: (data: { bankName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "계좌가 연결되었습니다", description: data.bankName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: BankIcon, ...o }),
    disconnected: (data: { bankName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "계좌 연결이 해제되었습니다", description: data.bankName, status: "info", icon: BankIcon, ...o }),
  },

  // 보안
  security: {
    newDeviceLogin: (data: { device: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "새 기기에서 로그인이 감지되었습니다", description: data.device, status: "warning", icon: Alert02Icon, categoryIcon: Shield01Icon, actions: [{ label: "확인하기", onClick: () => {} }], ...o }),
    passwordChanged: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "비밀번호가 변경되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: LockIcon, ...o }),
    twoFactorEnabled: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "2단계 인증이 활성화되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Shield01Icon, ...o }),
    suspiciousActivity: (data: { detail: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "의심 거래가 감지되었습니다", description: data.detail, status: "error", icon: Alert02Icon, categoryIcon: Shield01Icon, actions: [{ label: "거래 확인", onClick: () => {} }], ...o }),
    identityVerified: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "본인 인증이 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Shield01Icon, ...o }),
    biometricRegistered: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "생체 인증이 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: LockIcon, ...o }),
  },

  // 투자
  investment: {
    buyExecuted: (data: { stock: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "매수가 체결되었습니다", description: `${data.stock}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Coins01Icon, ...o }),
    sellExecuted: (data: { stock: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "매도가 체결되었습니다", description: `${data.stock}: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Coins01Icon, ...o }),
    orderPlaced: (data: { stock: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "주문이 접수되었습니다", description: data.stock, status: "info", icon: Coins01Icon, ...o }),
    orderCancelled: (data: { stock: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "주문이 취소되었습니다", description: data.stock, status: "info", icon: Coins01Icon, ...o }),
    targetReached: (data: { stock: string; price: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "목표가에 도달했습니다", description: `${data.stock}: ${data.price}`, status: "success", icon: Coins01Icon, actions: [{ label: "매도하기", onClick: () => {} }], ...o }),
    dividendReceived: (data: { stock: string; amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "배당금이 입금되었습니다", description: `${data.stock}: ${data.amount}`, status: "success", icon: MoneyReceive01Icon, ...o }),
  },

  // 대출/보험
  loan: {
    approved: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "대출이 승인되었습니다", description: data.amount, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Money01Icon, ...o }),
    applicationReceived: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "대출 신청이 접수되었습니다", status: "info", icon: Money01Icon, ...o }),
    underReview: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "대출 심사 진행 중", status: "loading", icon: Loading03Icon, categoryIcon: Money01Icon, ...o }),
    repaymentCompleted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "상환이 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Money01Icon, ...o }),
    insuranceClaimReceived: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "보험금 청구가 접수되었습니다", status: "info", icon: Shield01Icon, ...o }),
    insuranceExpiring: (data: { insuranceName: string; date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "fintech", title: "보험 만기 알림", description: `${data.insuranceName}: ${data.date}`, status: "warning", icon: Alert02Icon, categoryIcon: Shield01Icon, ...o }),
  },
}
