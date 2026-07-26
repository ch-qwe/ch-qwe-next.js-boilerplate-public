import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const meta: Meta<typeof HoverCard> = {
  title: "ui/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        className="cursor-pointer text-xs underline underline-offset-2 hover:text-foreground"
      >
        @johndoe
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-none bg-muted text-xs font-medium">
            JD
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium leading-none">John Doe</p>
            <p className="text-xs text-muted-foreground">@johndoe</p>
            <p className="text-xs/relaxed text-muted-foreground">
              Full-stack developer. Building tools for the modern web.
            </p>
            <div className="flex gap-3 pt-1 text-xs text-muted-foreground">
              <span>
                <strong className="font-medium text-foreground">128</strong>{" "}
                Following
              </span>
              <span>
                <strong className="font-medium text-foreground">4.2k</strong>{" "}
                Followers
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const RepositoryPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        className="cursor-pointer text-xs font-medium underline underline-offset-2 hover:text-foreground"
      >
        one-more
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-none bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3.5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <span className="text-xs font-medium">one-more</span>
          </div>
          <p className="text-xs/relaxed text-muted-foreground">
            A Next.js application built with shadcn/ui and Tailwind CSS.
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-yellow-400 inline-block" />
              TypeScript
            </span>
            <span>42 stars</span>
            <span>12 forks</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithAlignStart: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        className="cursor-pointer text-xs underline underline-offset-2 hover:text-foreground"
      >
        Hover for user info
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium">Jane Smith</p>
          <p className="text-xs text-muted-foreground">@janesmith · Joined March 2022</p>
          <p className="text-xs/relaxed text-muted-foreground">
            Designer and open-source contributor. Creating beautiful interfaces.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
