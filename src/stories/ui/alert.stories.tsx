import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  InformationCircleIcon,
  Alert02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Alert> = {
  title: "ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the application is available. Please update to get the
        latest features.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          Update
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const WithDestructiveAction: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
      <AlertTitle>Delete account</AlertTitle>
      <AlertDescription>
        This will permanently delete your account. This action cannot be undone.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
      <AlertTitle>Changes saved!</AlertTitle>
      <AlertDescription>
        Your profile has been updated successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>No icon, title only alert.</AlertTitle>
    </Alert>
  ),
}
