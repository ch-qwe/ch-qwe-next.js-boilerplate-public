import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { className: "w-64" } }
export const WithPlaceholder: Story = { args: { placeholder: "Enter your message...", className: "w-64" } }
export const Disabled: Story = { args: { placeholder: "Disabled textarea", disabled: true, className: "w-64" } }
