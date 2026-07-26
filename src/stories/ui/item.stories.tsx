import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon, MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons"

const meta = {
  title: "ui/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={InformationCircleIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>홍길동</ItemTitle>
          <ItemDescription>hong@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">
            <HugeiconsIcon icon={MoreHorizontalCircle01Icon} className="size-4" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <div className="w-80">
      <Item variant="outline">
        <ItemHeader>
          <ItemTitle>프로젝트 제목</ItemTitle>
          <span className="text-xs text-muted-foreground">2026-03-02</span>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>
            이 프로젝트는 팀 협업을 위한 작업 관리 도구입니다. 태스크 생성,
            할당, 추적 및 보고 기능을 지원합니다.
          </ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-xs text-muted-foreground">진행중</span>
          <ItemActions>
            <Button size="sm" variant="outline">
              편집
            </Button>
          </ItemActions>
        </ItemFooter>
      </Item>
    </div>
  ),
}

export const GroupOfItems: Story = {
  render: () => (
    <div className="w-80">
      <ItemGroup>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>김철수</ItemTitle>
            <ItemDescription>chulsoo@example.com</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>이영희</ItemTitle>
            <ItemDescription>younghee@example.com</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="outline">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>박지민</ItemTitle>
            <ItemDescription>jimin@example.com</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
}

export const Muted: Story = {
  render: () => (
    <div className="w-80">
      <Item variant="muted">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={InformationCircleIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>홍길동</ItemTitle>
          <ItemDescription>hong@example.com</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="w-80">
      <ItemGroup>
        <Item size="sm" variant="outline">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>김철수</ItemTitle>
            <ItemDescription>chulsoo@example.com</ItemDescription>
          </ItemContent>
        </Item>
        <Item size="sm" variant="outline">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={InformationCircleIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>이영희</ItemTitle>
            <ItemDescription>younghee@example.com</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
}
