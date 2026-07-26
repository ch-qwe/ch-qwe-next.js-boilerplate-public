import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "ui/Sonner",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast("Event has been created.")}
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success("Successfully saved changes.")}
    >
      Show Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error("Something went wrong.")}
    >
      Show Error Toast
    </Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Scheduled: Catch up", {
          description: "Friday, February 10, 2024 at 5:57 PM",
        })
      }
    >
      Show Toast with Description
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.warning("Your session will expire soon.")}
    >
      Show Warning Toast
    </Button>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.loading("Uploading file...")}
    >
      Show Loading Toast
    </Button>
  ),
}
