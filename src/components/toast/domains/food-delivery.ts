import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Restaurant01Icon,
  DeliveryBox01Icon,
  Scooter01Icon,
  Location01Icon,
  Timer01Icon,
  StarIcon,
  Comment01Icon,
  FavouriteIcon,
  Coupon01Icon,
  CreditCardIcon,
  GiftIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const foodDeliveryToast = {
  // 주문
  order: {
    placed: (data: { storeName: string; orderId: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "주문이 접수되었습니다", description: `${data.storeName} | ${data.orderId}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Restaurant01Icon, ...o }),
    confirming: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "매장에서 확인 중입니다", description: data.storeName, status: "loading", icon: Loading03Icon, categoryIcon: Restaurant01Icon, ...o }),
    accepted: (data: { storeName: string; estimatedTime: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "주문이 승인되었습니다", description: `${data.storeName} | 예상 ${data.estimatedTime}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Restaurant01Icon, ...o }),
    rejected: (data: { storeName: string; reason: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "주문이 거절되었습니다", description: `${data.storeName}: ${data.reason}`, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Restaurant01Icon, ...o }),
    cancelled: (data: { orderId: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "주문이 취소되었습니다", description: data.orderId, status: "info", icon: Restaurant01Icon, ...o }),
    substitutionRequest: (data: { originalItem: string; suggestedItem: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "메뉴 품절 — 대체 요청", description: `${data.originalItem} → ${data.suggestedItem}`, status: "warning", icon: Alert02Icon, categoryIcon: Restaurant01Icon, actions: [{ label: "수락", onClick: () => {} }, { label: "거절", onClick: () => {} }], ...o }),
  },

  // 배달
  delivery: {
    cooking: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "조리가 시작되었습니다", description: data.storeName, status: "info", icon: Restaurant01Icon, ...o }),
    cookingDone: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "조리가 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Restaurant01Icon, ...o }),
    riderAssigned: (data: { riderName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "라이더가 배정되었습니다", description: data.riderName, status: "info", icon: Scooter01Icon, ...o }),
    pickedUp: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "픽업이 완료되었습니다", status: "info", icon: Scooter01Icon, ...o }),
    onTheWay: (data: { estimatedMinutes: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "배달 중입니다", description: `약 ${data.estimatedMinutes}분 후 도착 예정`, status: "info", icon: Scooter01Icon, progress: { value: 70, label: "배달 중" }, ...o }),
    nearby: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "라이더가 근처에 도착했습니다", status: "info", icon: Location01Icon, ...o }),
    completed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "배달이 완료되었습니다!", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: DeliveryBox01Icon, actions: [{ label: "리뷰 작성", onClick: () => {} }], ...o }),
    etaChanged: (data: { newEta: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "도착 예상 시간이 변경되었습니다", description: data.newEta, status: "info", icon: Timer01Icon, ...o }),
  },

  // 결제
  payment: {
    completed: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "결제가 완료되었습니다", description: data.amount, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    failed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "결제에 실패했습니다", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: CreditCardIcon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    refunded: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "환불이 처리되었습니다", description: data.amount, status: "info", icon: CreditCardIcon, ...o }),
    pointsEarned: (data: { points: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "포인트가 적립되었습니다", description: `${data.points.toLocaleString()}P`, status: "success", icon: GiftIcon, ...o }),
    couponAutoApplied: (data: { discount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "쿠폰이 자동 적용되었습니다", description: `${data.discount} 할인`, status: "success", icon: Coupon01Icon, ...o }),
  },

  // 리뷰
  review: {
    submitted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "리뷰가 작성되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: StarIcon, ...o }),
    rewardEarned: (data: { reward: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "리뷰 보상이 지급되었습니다", description: data.reward, status: "success", icon: GiftIcon, ...o }),
    ownerReplied: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "사장님이 답글을 달았습니다", description: data.storeName, status: "info", icon: Comment01Icon, actions: [{ label: "확인하기", onClick: () => {} }], ...o }),
  },

  // 가게
  store: {
    favorited: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "즐겨찾기에 추가되었습니다", description: data.storeName, status: "success", icon: FavouriteIcon, ...o }),
    unfavorited: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "즐겨찾기에서 삭제되었습니다", description: data.storeName, status: "info", icon: FavouriteIcon, ...o }),
    opened: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "가게가 오픈했습니다", description: data.storeName, status: "info", icon: Restaurant01Icon, ...o }),
    closed: (data: { storeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "가게가 마감되었습니다", description: data.storeName, status: "info", icon: Restaurant01Icon, ...o }),
    minimumNotMet: (data: { minimum: string; current: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "최소 주문금액 미달", description: `최소 ${data.minimum} (현재 ${data.current})`, status: "warning", icon: Alert02Icon, ...o }),
  },

  // 이벤트
  event: {
    couponReceived: (data: { couponName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "이벤트 쿠폰이 발급되었습니다", description: data.couponName, status: "success", icon: Coupon01Icon, ...o }),
    timeSaleStarted: (data: { storeName: string; discount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "타임 세일 시작!", description: `${data.storeName}: ${data.discount}`, status: "info", icon: Timer01Icon, actions: [{ label: "주문하기", onClick: () => {} }], ...o }),
    freeDelivery: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "food-delivery", title: "무료 배달이 적용되었습니다", status: "success", icon: Scooter01Icon, ...o }),
  },
}
