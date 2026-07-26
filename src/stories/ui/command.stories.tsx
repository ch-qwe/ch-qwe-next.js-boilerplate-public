import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command"

const meta = {
  title: "ui/Command",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-72 rounded border shadow-md">
      <Command>
        <CommandInput placeholder="명령어 검색..." />
        <CommandList>
          <CommandEmpty>결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="제안">
            <CommandItem>
              캘린더
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem>
              이모지 검색
              <CommandShortcut>⌘J</CommandShortcut>
            </CommandItem>
            <CommandItem>계산기</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="설정">
            <CommandItem>
              프로필
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              청구 관리
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              설정
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}

export const InDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          명령 팔레트 열기{" "}
          <kbd className="ml-2 rounded border px-1 text-xs">⌘K</kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="명령어 검색..." />
            <CommandList>
              <CommandEmpty>결과가 없습니다.</CommandEmpty>
              <CommandGroup heading="파일">
                <CommandItem onSelect={() => setOpen(false)}>
                  새 파일
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  파일 열기
                  <CommandShortcut>⌘O</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  저장
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="편집">
                <CommandItem onSelect={() => setOpen(false)}>
                  실행 취소
                  <CommandShortcut>⌘Z</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  다시 실행
                  <CommandShortcut>⇧⌘Z</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  찾기
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="계정">
                <CommandItem onSelect={() => setOpen(false)}>
                  프로필
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  로그아웃
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    )
  },
}

export const WithCheckedItems: Story = {
  render: () => (
    <div className="w-72 rounded border shadow-md">
      <Command>
        <CommandInput placeholder="테마 검색..." />
        <CommandList>
          <CommandEmpty>결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="테마">
            <CommandItem data-checked="true">라이트</CommandItem>
            <CommandItem>다크</CommandItem>
            <CommandItem>시스템</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}
