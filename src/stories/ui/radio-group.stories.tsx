import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const meta = {
  title: "ui/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">옵션 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">옵션 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">옵션 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="small" className="flex flex-row gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="small" id="small" />
        <Label htmlFor="small">소형</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="medium" id="medium" />
        <Label htmlFor="medium">중형</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="large" id="large" />
        <Label htmlFor="large">대형</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="d-option-1" />
        <Label htmlFor="d-option-1">활성화</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="d-option-2" disabled />
        <Label htmlFor="d-option-2">비활성화</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="d-option-3" />
        <Label htmlFor="d-option-3">활성화</Label>
      </div>
    </RadioGroup>
  ),
}
