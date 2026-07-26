import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import * as React from "react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu"

const meta = {
  title: "ui/ContextMenu",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-32 w-64 items-center justify-center rounded border border-dashed border-muted-foreground text-xs text-muted-foreground">
          우클릭 하세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          뒤로
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          앞으로
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          새로고침
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>편집</ContextMenuLabel>
          <ContextMenuItem>
            잘라내기
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            복사
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            붙여넣기
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">삭제</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCheckboxAndRadio: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true)
    const [showFullUrls, setShowFullUrls] = React.useState(false)
    const [textSize, setTextSize] = React.useState("medium")

    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-32 w-64 items-center justify-center rounded border border-dashed border-muted-foreground text-xs text-muted-foreground">
            우클릭 하세요
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>보기 설정</ContextMenuLabel>
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              북마크 바 표시
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              전체 URL 표시
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuLabel>텍스트 크기</ContextMenuLabel>
            <ContextMenuRadioGroup value={textSize} onValueChange={setTextSize}>
              <ContextMenuRadioItem value="small">작게</ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">보통</ContextMenuRadioItem>
              <ContextMenuRadioItem value="large">크게</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-32 w-64 items-center justify-center rounded border border-dashed border-muted-foreground text-xs text-muted-foreground">
          우클릭 하세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>열기</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>다른 앱으로 열기</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>브라우저</ContextMenuItem>
            <ContextMenuItem>텍스트 편집기</ContextMenuItem>
            <ContextMenuItem>코드 편집기</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          복사
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          이름 변경
          <ContextMenuShortcut>↩</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          휴지통으로 이동
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
