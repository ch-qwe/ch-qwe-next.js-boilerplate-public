import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { ecommerceToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Ecommerce",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// 장바구니
export const CartAdded: Story = {
  name: "장바구니 - 상품 추가",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.cart.added({ productName: "에어팟 프로", quantity: 1 })}>
      장바구니 추가
    </Button>
  ),
}

export const CartRemoved: Story = {
  name: "장바구니 - 상품 삭제",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.cart.removed({ productName: "에어팟 프로" })}>
      장바구니 삭제
    </Button>
  ),
}

export const CartOutOfStock: Story = {
  name: "장바구니 - 재고 부족",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.cart.outOfStock({ productName: "맥북 프로 16인치" })}>
      재고 부족 경고
    </Button>
  ),
}

// 주문
export const OrderConfirmed: Story = {
  name: "주문 - 주문 완료",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.order.confirmed({ orderId: "ORD-2024-1234", total: "89,000원" })}>
      주문 완료
    </Button>
  ),
}

export const OrderFailed: Story = {
  name: "주문 - 주문 실패",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.order.failed({ reason: "결제 한도 초과" })}>
      주문 실패
    </Button>
  ),
}

export const PaymentCompleted: Story = {
  name: "주문 - 결제 완료",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.order.paymentCompleted({ amount: "89,000원" })}>
      결제 완료
    </Button>
  ),
}

export const Refunded: Story = {
  name: "주문 - 환불 처리",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.order.refunded({ amount: "89,000원" })}>
      환불 처리
    </Button>
  ),
}

// 배송
export const DeliveryTracking: Story = {
  name: "배송 - 배송 추적",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.delivery.tracking({ orderId: "ORD-2024-1234", step: 3, totalSteps: 5, currentStatus: "배송 중" })}>
      배송 추적
    </Button>
  ),
}

export const DeliveryCompleted: Story = {
  name: "배송 - 배송 완료",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.delivery.completed({ orderId: "ORD-2024-1234" })}>
      배송 완료
    </Button>
  ),
}

// 상품
export const Wishlisted: Story = {
  name: "상품 - 위시리스트 추가",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.product.wishlisted({ productName: "맥북 에어 M3" })}>
      위시리스트 추가
    </Button>
  ),
}

export const PriceDropped: Story = {
  name: "상품 - 가격 인하",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.product.priceDropped({ productName: "갤럭시 S24", price: "899,000원" })}>
      가격 인하 알림
    </Button>
  ),
}

// 쿠폰/포인트
export const CouponApplied: Story = {
  name: "쿠폰 - 쿠폰 적용",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.coupon.applied({ couponName: "신규가입 쿠폰", discount: "15%" })}>
      쿠폰 적용
    </Button>
  ),
}

export const PointsEarned: Story = {
  name: "쿠폰 - 포인트 적립",
  render: () => (
    <Button variant="outline" onClick={() => ecommerceToast.coupon.pointsEarned({ points: 1500 })}>
      포인트 적립
    </Button>
  ),
}
