import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "ui/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const Circle: Story = {
  render: () => <Skeleton className="size-12 rounded-full" />,
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex items-center gap-2 pt-1">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    </div>
  ),
}
