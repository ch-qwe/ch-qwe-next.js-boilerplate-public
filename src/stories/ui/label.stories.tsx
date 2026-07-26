import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const meta = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "Label" } }

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" className="w-64" />
    </div>
  ),
}
