import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  ShoppingCart01Icon,
  ShoppingBag02Icon,
  Package01Icon,
  DeliveryBox01Icon,
  Tag01Icon,
  Coupon01Icon,
  StarIcon,
  Bookmark01Icon,
  CreditCardIcon,
  Wallet01Icon,
  GiftIcon,
  HeartAddIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const ecommerceToast = {
  // 장바구니
  cart: {
    added: (data: { productName: string; quantity?: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: `${data.productName} 추가 완료`, description: data.quantity ? `${data.quantity}개가 장바구니에 추가되었습니다` : undefined, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: ShoppingCart01Icon, actions: [{ label: "장바구니 보기", onClick: () => {} }], ...o }),
    removed: (data: { productName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: `${data.productName} 삭제됨`, status: "info", icon: ShoppingCart01Icon, ...o }),
    quantityChanged: (data: { productName: string; quantity: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "수량 변경됨", description: `${data.productName}: ${data.quantity}개`, status: "info", icon: ShoppingCart01Icon, ...o }),
    cleared: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "장바구니가 비워졌습니다", status: "info", icon: ShoppingCart01Icon, ...o }),
    outOfStock: (data: { productName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "재고 부족", description: `${data.productName}의 재고가 부족합니다`, status: "warning", icon: Alert02Icon, categoryIcon: ShoppingCart01Icon, ...o }),
  },

  // 주문
  order: {
    confirmed: (data: { orderId: string; total: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "주문이 완료되었습니다", description: `주문번호: ${data.orderId} | ${data.total}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: ShoppingBag02Icon, actions: [{ label: "주문 보기", onClick: () => {} }], ...o }),
    cancelled: (data: { orderId: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "주문이 취소되었습니다", description: `주문번호: ${data.orderId}`, status: "warning", icon: Alert02Icon, categoryIcon: ShoppingBag02Icon, ...o }),
    failed: (data: { reason: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "주문 처리에 실패했습니다", description: data.reason, status: "error", icon: MultiplicationSignCircleIcon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    paymentCompleted: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "결제가 완료되었습니다", description: `결제 금액: ${data.amount}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    paymentFailed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "결제에 실패했습니다", description: "결제 수단을 확인해주세요", status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: CreditCardIcon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    refunded: (data: { amount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "환불이 처리되었습니다", description: `환불 금액: ${data.amount}`, status: "info", icon: Wallet01Icon, ...o }),
  },

  // 배송
  delivery: {
    started: (data: { orderId: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "배송이 시작되었습니다", description: `주문번호: ${data.orderId}`, status: "info", icon: DeliveryBox01Icon, ...o }),
    tracking: (data: { orderId: string; step: number; totalSteps: number; currentStatus: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: data.currentStatus, description: `주문번호: ${data.orderId}`, status: "info", icon: DeliveryBox01Icon, progress: { value: (data.step / data.totalSteps) * 100, label: `${data.step}/${data.totalSteps} 단계` }, ...o }),
    completed: (data: { orderId: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "배송이 완료되었습니다", description: `주문번호: ${data.orderId}`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Package01Icon, actions: [{ label: "수령 확인", onClick: () => {} }, { label: "리뷰 작성", onClick: () => {} }], ...o }),
    returnAccepted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "반품 접수가 완료되었습니다", status: "info", icon: Package01Icon, ...o }),
    exchangeAccepted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "교환 접수가 완료되었습니다", status: "info", icon: Package01Icon, ...o }),
  },

  // 상품
  product: {
    wishlisted: (data: { productName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "위시리스트에 추가됨", description: data.productName, status: "success", icon: HeartAddIcon, ...o }),
    wishlistRemoved: (data: { productName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "위시리스트에서 삭제됨", description: data.productName, status: "info", icon: HeartAddIcon, ...o }),
    restockAlert: (data: { productName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "재입고 알림이 등록되었습니다", description: data.productName, status: "info", icon: InformationCircleIcon, categoryIcon: Tag01Icon, ...o }),
    priceDropped: (data: { productName: string; price: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "가격이 인하되었습니다", description: `${data.productName}: ${data.price}`, status: "info", icon: Tag01Icon, actions: [{ label: "바로 구매", onClick: () => {} }], ...o }),
    reviewSubmitted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "리뷰가 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: StarIcon, ...o }),
    inquirySubmitted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "상품 문의가 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 쿠폰/포인트
  coupon: {
    applied: (data: { couponName: string; discount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "쿠폰이 적용되었습니다", description: `${data.couponName}: ${data.discount} 할인`, status: "success", icon: Coupon01Icon, ...o }),
    expiringSoon: (data: { couponName: string; expireDate: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "쿠폰 만료 임박", description: `${data.couponName} (${data.expireDate}까지)`, status: "warning", icon: Alert02Icon, categoryIcon: Coupon01Icon, ...o }),
    pointsEarned: (data: { points: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "포인트가 적립되었습니다", description: `${data.points.toLocaleString()}P 적립`, status: "success", icon: GiftIcon, ...o }),
    pointsUsed: (data: { points: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "포인트가 사용되었습니다", description: `${data.points.toLocaleString()}P 사용`, status: "info", icon: GiftIcon, ...o }),
    downloaded: (data: { couponName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "쿠폰이 다운로드되었습니다", description: data.couponName, status: "success", icon: Coupon01Icon, ...o }),
  },

  // 계정
  account: {
    addressSaved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "주소가 저장되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    defaultAddressChanged: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "기본 배송지가 변경되었습니다", status: "info", icon: Bookmark01Icon, ...o }),
    paymentMethodAdded: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "결제 수단이 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    paymentMethodRemoved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "ecommerce", title: "결제 수단이 삭제되었습니다", status: "info", icon: CreditCardIcon, ...o }),
  },
}
