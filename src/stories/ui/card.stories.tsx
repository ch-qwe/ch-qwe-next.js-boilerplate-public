import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          A short description of what this card is about.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            ⋯
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. You can place any content
          here, such as text, images, or other components.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  render: () => (
    <Card className="w-72" size="sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact size variant with tighter spacing.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content uses smaller padding in the sm size variant.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button size="sm">View all</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">No recent activity to display.</p>
      </CardContent>
    </Card>
  ),
}

export const NoFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Analytics Summary</CardTitle>
        <CardDescription>Past 30 days performance overview.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Page views</span>
            <span className="font-medium">12,430</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Unique visitors</span>
            <span className="font-medium">4,821</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bounce rate</span>
            <span className="font-medium">34.2%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}
