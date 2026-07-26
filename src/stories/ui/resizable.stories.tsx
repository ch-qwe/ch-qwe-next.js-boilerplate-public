import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const meta = {
  title: "ui/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="w-[500px] h-48 rounded-none border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">왼쪽 패널</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">오른쪽 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="vertical"
      className="w-80 h-64 rounded-none border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">상단 패널</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">하단 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="w-[600px] h-48 rounded-none border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-4 bg-muted/20">
          <span className="text-xs text-muted-foreground">사이드바</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">메인 콘텐츠</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-4 bg-muted/20">
          <span className="text-xs text-muted-foreground">속성 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithoutHandle: Story = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="w-[500px] h-48 rounded-none border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">패널 A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs text-muted-foreground">패널 B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
