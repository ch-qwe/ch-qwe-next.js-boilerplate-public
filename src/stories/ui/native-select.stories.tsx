import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select"

const meta = {
  title: "ui/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">선택하세요</NativeSelectOption>
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
      <NativeSelectOption value="orange">오렌지</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="">선택하세요</NativeSelectOption>
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
      <NativeSelectOption value="orange">오렌지</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">카테고리 선택</NativeSelectOption>
      <NativeSelectOptGroup label="과일">
        <NativeSelectOption value="apple">사과</NativeSelectOption>
        <NativeSelectOption value="banana">바나나</NativeSelectOption>
        <NativeSelectOption value="orange">오렌지</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="채소">
        <NativeSelectOption value="carrot">당근</NativeSelectOption>
        <NativeSelectOption value="spinach">시금치</NativeSelectOption>
        <NativeSelectOption value="broccoli">브로콜리</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="default">비활성화됨</NativeSelectOption>
    </NativeSelect>
  ),
}
