import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import * as React from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar"

const meta = {
  title: "ui/Menubar",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>파일</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            새 탭
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            새 창
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>새 시크릿 창</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>공유</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>이메일 링크</MenubarItem>
              <MenubarItem>메시지</MenubarItem>
              <MenubarItem>메모</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            인쇄
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>편집</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            실행 취소
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            다시 실행
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            잘라내기
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            복사
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            붙여넣기
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            모두 선택
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>보기</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItemGroup />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

function MenubarCheckboxItemGroup() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showFullUrls, setShowFullUrls] = React.useState(false)
  const [profile, setProfile] = React.useState("andy")

  return (
    <>
      <MenubarGroup>
        <MenubarLabel>보기 옵션</MenubarLabel>
        <MenubarCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          북마크 바 항상 표시
        </MenubarCheckboxItem>
        <MenubarCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          전체 URL 표시
        </MenubarCheckboxItem>
      </MenubarGroup>
      <MenubarSeparator />
      <MenubarGroup>
        <MenubarLabel>프로필</MenubarLabel>
        <MenubarRadioGroup value={profile} onValueChange={setProfile}>
          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
          <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarGroup>
    </>
  )
}
