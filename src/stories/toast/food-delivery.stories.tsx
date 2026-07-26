import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { foodDeliveryToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/FoodDelivery",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const OrderPlaced: Story = {
  name: "주문 - 주문 접수",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.order.placed({ storeName: "맘스터치 강남점", orderId: "FD-2024-5678" })}>주문 접수</Button>,
}

export const OrderAccepted: Story = {
  name: "주문 - 주문 승인",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.order.accepted({ storeName: "맘스터치 강남점", estimatedTime: "35분" })}>주문 승인</Button>,
}

export const OrderRejected: Story = {
  name: "주문 - 주문 거절",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.order.rejected({ storeName: "피자헛", reason: "재료 소진" })}>주문 거절</Button>,
}

export const SubstitutionRequest: Story = {
  name: "주문 - 대체 메뉴 요청",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.order.substitutionRequest({ originalItem: "치즈버거", suggestedItem: "더블치즈버거" })}>대체 요청</Button>,
}

export const RiderAssigned: Story = {
  name: "배달 - 라이더 배정",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.delivery.riderAssigned({ riderName: "홍길동 라이더" })}>라이더 배정</Button>,
}

export const OnTheWay: Story = {
  name: "배달 - 배달 중",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.delivery.onTheWay({ estimatedMinutes: 15 })}>배달 중</Button>,
}

export const DeliveryCompleted: Story = {
  name: "배달 - 배달 완료",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.delivery.completed()}>배달 완료</Button>,
}

export const ReviewSubmitted: Story = {
  name: "리뷰 - 리뷰 작성",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.review.submitted()}>리뷰 작성</Button>,
}

export const OwnerReplied: Story = {
  name: "리뷰 - 사장님 답글",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.review.ownerReplied({ storeName: "맘스터치 강남점" })}>사장님 답글</Button>,
}

export const StoreFavorited: Story = {
  name: "가게 - 즐겨찾기 추가",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.store.favorited({ storeName: "교촌치킨" })}>즐겨찾기</Button>,
}

export const MinimumNotMet: Story = {
  name: "가게 - 최소 주문금액 미달",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.store.minimumNotMet({ minimum: "15,000원", current: "12,000원" })}>최소 금액 미달</Button>,
}

export const TimeSale: Story = {
  name: "이벤트 - 타임 세일",
  render: () => <Button variant="outline" onClick={() => foodDeliveryToast.event.timeSaleStarted({ storeName: "도미노피자", discount: "50% 할인" })}>타임 세일</Button>,
}
