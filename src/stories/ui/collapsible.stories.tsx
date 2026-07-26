import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta = {
  title: "ui/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Collapsible>
        <div className="flex items-center justify-between px-3 py-2 border rounded-none">
          <span className="text-xs font-medium">섹션 제목</span>
          <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="h-6 text-xs" />}>
            펼치기
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="px-3 py-2 border border-t-0 rounded-none text-xs text-muted-foreground space-y-1">
            <p>이 섹션은 접을 수 있는 콘텐츠를 포함합니다.</p>
            <p>항목 1</p>
            <p>항목 2</p>
            <p>항목 3</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-80">
      <Collapsible defaultOpen>
        <div className="flex items-center justify-between px-3 py-2 border rounded-none">
          <span className="text-xs font-medium">기본으로 열린 섹션</span>
          <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="h-6 text-xs" />}>
            접기 / 펼치기
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="px-3 py-2 border border-t-0 rounded-none text-xs text-muted-foreground space-y-1">
            <p>이 콘텐츠는 기본적으로 표시됩니다.</p>
            <p>버튼을 클릭하면 접힙니다.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const Nested: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      {["그룹 A", "그룹 B", "그룹 C"].map((group) => (
        <Collapsible key={group}>
          <div className="flex items-center justify-between px-3 py-2 border rounded-none bg-muted/30">
            <span className="text-xs font-medium">{group}</span>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="h-6 text-xs" />}>
              토글
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="px-3 py-2 border border-t-0 rounded-none text-xs text-muted-foreground">
              {group}의 콘텐츠입니다.
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  ),
}
