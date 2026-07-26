import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "ui/Kbd",
  component: Kbd,
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "K" } }

export const Enter: Story = { args: { children: "Enter" } }

export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const CtrlShiftP: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
}
