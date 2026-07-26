import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "ui/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "B", "aria-label": "Bold" } }
export const Outline: Story = { args: { variant: "outline", children: "B", "aria-label": "Bold" } }
export const Pressed: Story = { args: { defaultPressed: true, children: "B", "aria-label": "Bold" } }
export const Disabled: Story = { args: { disabled: true, children: "B", "aria-label": "Bold" } }
export const Small: Story = { args: { size: "sm", children: "B", "aria-label": "Bold" } }
export const Large: Story = { args: { size: "lg", children: "B", "aria-label": "Bold" } }

export const WithText: Story = {
  args: { children: "Bold", variant: "outline", "aria-label": "Toggle bold" },
}
