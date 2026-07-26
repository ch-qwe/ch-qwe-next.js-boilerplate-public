import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from "@/components/ui/input-group"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon } from "@hugeicons/core-free-icons"

const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <HugeiconsIcon icon={SearchIcon} className="size-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput placeholder="검색어를 입력하세요" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost" size="xs">
            검색
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithPrefix: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithSubmitButton: Story = {
  render: () => (
    <div className="w-72">
      <InputGroup>
        <InputGroupInput placeholder="이메일 주소" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost" size="xs" type="submit">
            구독
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
