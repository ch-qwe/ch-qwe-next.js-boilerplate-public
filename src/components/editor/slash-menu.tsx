"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import type { SlashCommandItem } from "./slash-extension"

export interface SlashMenuRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean
}

interface SlashMenuProps {
  items: SlashCommandItem[]
  command: (item: SlashCommandItem) => void
}

export const SlashMenu = React.forwardRef<SlashMenuRef, SlashMenuProps>(
  function SlashMenu({ items, command }, ref) {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const listRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
      setSelectedIndex(0)
    }, [items])

    React.useEffect(() => {
      const el = listRef.current?.querySelector<HTMLElement>(
        `[data-slash-index="${selectedIndex}"]`,
      )
      el?.scrollIntoView({ block: "nearest" })
    }, [selectedIndex])

    const selectItem = (index: number) => {
      const item = items[index]
      if (item) command(item)
    }

    React.useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (items.length === 0) return false
        if (event.key === "ArrowDown") {
          setSelectedIndex((i) => (i + 1) % items.length)
          return true
        }
        if (event.key === "ArrowUp") {
          setSelectedIndex((i) => (i - 1 + items.length) % items.length)
          return true
        }
        if (event.key === "Enter") {
          selectItem(selectedIndex)
          return true
        }
        return false
      },
    }))

    if (items.length === 0) {
      return (
        <div className="w-[min(calc(100vw-2rem),288px)] rounded-md border border-border bg-popover p-3 text-sm text-muted-foreground shadow-md">
          일치하는 명령이 없어요
        </div>
      )
    }

    return (
      <div
        ref={listRef}
        className="max-h-[min(60vh,360px)] w-[min(calc(100vw-2rem),288px)] overflow-y-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md"
      >
        {items.map((item, index) => {
          const active = index === selectedIndex
          return (
            <button
              type="button"
              key={item.key}
              data-slash-index={index}
              onClick={() => selectItem(index)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-sm px-2 py-1.5 text-left text-sm transition-colors",
                active
                  ? "bg-muted text-foreground"
                  : "text-foreground/80 hover:bg-muted/60",
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded border border-border bg-background text-xs font-medium",
                  active && "border-foreground/20",
                )}
              >
                {item.iconLabel}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">
                  {item.title}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {item.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    )
  },
)
