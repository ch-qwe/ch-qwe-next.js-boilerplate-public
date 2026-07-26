import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const meta = {
  title: "ui/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Storybook", "Zustand", "Zod", "React Hook Form", "Vitest",
  "Playwright", "Vercel", "Firebase", "Supabase", "Prisma",
  "tRPC", "GraphQL", "REST API", "WebSocket", "Docker",
]

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-64 rounded-none border p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium leading-none mb-4">기술 스택</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-xs text-muted-foreground py-1 border-b last:border-0">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-72 whitespace-nowrap rounded-none border">
      <div className="flex p-4 gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="shrink-0 rounded-none border bg-muted px-3 py-1.5 text-xs"
          >
            {tag}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const LargeContent: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-none border">
      <div className="p-4">
        <h4 className="text-sm font-medium mb-3">긴 텍스트 예시</h4>
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i} className="text-xs text-muted-foreground mb-2">
            항목 {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
}
