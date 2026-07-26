import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Input } from "@/components/ui/input"

const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
export const WithPlaceholder: Story = { args: { placeholder: "Enter text..." } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }
export const Email: Story = { args: { type: "email", placeholder: "you@example.com" } }
export const Password: Story = { args: { type: "password", placeholder: "Password" } }
