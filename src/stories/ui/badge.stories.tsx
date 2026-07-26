import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Badge } from "@/components/ui/badge"

const meta = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "Badge" } }
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Destructive" } }
export const Outline: Story = { args: { variant: "outline", children: "Outline" } }
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } }
export const Link: Story = { args: { variant: "link", children: "Link" } }
