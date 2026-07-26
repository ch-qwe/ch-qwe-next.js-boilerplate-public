import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Slider } from "@/components/ui/slider"

const meta = {
  title: "ui/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[40]} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[25, 75]} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[50]} disabled />
    </div>
  ),
}

export const MinMax: Story = {
  render: () => (
    <div className="w-64">
      <Slider defaultValue={[30]} min={0} max={200} />
    </div>
  ),
}
