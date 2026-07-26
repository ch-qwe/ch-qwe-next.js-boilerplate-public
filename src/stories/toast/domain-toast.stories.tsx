import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { showDomainToast } from "@/components/toast/domain-toast"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  Alert02Icon,
  InformationCircleIcon,
  ShoppingCart01Icon,
  MoneySend01Icon,
  UserAdd01Icon,
  Upload01Icon,
  DeliveryBox01Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta = {
  title: "toast/DomainToast",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  name: "Success",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "ecommerce",
          title: "장바구니에 추가됨",
          description: "[공식]바이크롭 코 유산균/30 캡슐(1개월분) · 1개",
          status: "success",
          icon: CheckmarkCircle02Icon,
          categoryIcon: ShoppingCart01Icon,
          actions: [{ label: "보기", onClick: () => {} }],
        })
      }
    >
      Success Toast
    </Button>
  ),
}

export const Error: Story = {
  name: "Error",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "fintech",
          title: "송금에 실패했습니다",
          description: "수취인 계좌를 확인해주세요",
          status: "error",
          icon: MultiplicationSignCircleIcon,
          actions: [{ label: "다시 시도", onClick: () => {} }],
        })
      }
    >
      Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  name: "Warning",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "saas",
          title: "무료 체험 종료 임박",
          description: "3일 후 만료됩니다",
          status: "warning",
          icon: Alert02Icon,
          actions: [{ label: "업그레이드", onClick: () => {} }],
        })
      }
    >
      Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  name: "Info",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "messaging",
          title: "김영희님의 새 메시지",
          description: "회의 시간 변경되었어요",
          status: "info",
          icon: InformationCircleIcon,
          timestamp: "방금 전",
        })
      }
    >
      Info Toast
    </Button>
  ),
}

export const Loading: Story = {
  name: "Loading",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "content",
          title: "업로드 중",
          description: "video-final.mp4",
          status: "loading",
          categoryIcon: Upload01Icon,
          progress: { value: 65, showPercentage: true },
        })
      }
    >
      Loading Toast
    </Button>
  ),
}

export const WithProgress: Story = {
  name: "Progress Bar",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "food-delivery",
          title: "배달 중",
          description: "약 15분 후 도착 예정",
          status: "info",
          icon: DeliveryBox01Icon,
          progress: { value: 70, label: "3/5 단계" },
        })
      }
    >
      Progress Toast
    </Button>
  ),
}

export const MultiAction: Story = {
  name: "Multiple Actions",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "social",
          title: "홍길동님의 팔로우 요청",
          status: "info",
          icon: UserAdd01Icon,
          actions: [
            { label: "수락", onClick: () => {} },
            { label: "거절", onClick: () => {} },
          ],
        })
      }
    >
      Multi Action Toast
    </Button>
  ),
}

export const Minimal: Story = {
  name: "Minimal (No Icon)",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "saas",
          title: "클립보드에 복사되었습니다",
          status: "neutral",
        })
      }
    >
      Minimal Toast
    </Button>
  ),
}

export const TransferComplete: Story = {
  name: "Fintech - 송금 완료",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        showDomainToast({
          domain: "fintech",
          title: "송금이 완료되었습니다",
          description: "김영희에게 50,000원",
          status: "success",
          icon: CheckmarkCircle02Icon,
          categoryIcon: MoneySend01Icon,
          actions: [{ label: "확인", onClick: () => {} }],
        })
      }
    >
      송금 완료
    </Button>
  ),
}
