import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon, Alert02Icon } from "@hugeicons/core-free-icons"

const meta = {
  title: "ui/Empty",
  component: Empty,
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80 border rounded-none">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
          </EmptyMedia>
          <EmptyTitle>데이터가 없습니다</EmptyTitle>
          <EmptyDescription>
            표시할 항목이 없습니다. 새로운 항목을 추가해보세요.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">항목 추가</Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="w-80 border rounded-none">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
          </EmptyMedia>
          <EmptyTitle>검색 결과 없음</EmptyTitle>
          <EmptyDescription>
            검색 조건과 일치하는 항목을 찾을 수 없습니다. 다른 키워드로
            검색해보세요.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="w-80 border rounded-none">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>받은 편지함이 비어 있습니다</EmptyTitle>
          <EmptyDescription>
            새 메시지를 작성하거나 동료를 초대하세요.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">메시지 작성</Button>
          <Button size="sm" variant="outline">
            동료 초대
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <div className="w-80 border rounded-none">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>항목 없음</EmptyTitle>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}
