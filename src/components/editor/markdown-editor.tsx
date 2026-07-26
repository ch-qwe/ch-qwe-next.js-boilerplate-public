"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { MarkdownView } from "./markdown-view"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "마크다운으로 작성하세요. 예) **굵게**, *기울임*, # 제목, - 리스트",
  className,
}: MarkdownEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)
  const [mobileView, setMobileView] = React.useState<"edit" | "preview">("edit")

  React.useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.max(el.scrollHeight, 192)}px`
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const el = e.currentTarget
      const start = el.selectionStart
      const end = el.selectionEnd
      const next = value.slice(0, start) + "  " + value.slice(end)
      onChange(next)
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2
      })
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-2 md:hidden">
        <div className="inline-flex rounded-md border border-border bg-muted/40 p-0.5">
          <Button
            type="button"
            variant={mobileView === "edit" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setMobileView("edit")}
          >
            작성
          </Button>
          <Button
            type="button"
            variant={mobileView === "preview" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setMobileView("preview")}
          >
            미리보기
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className={cn(mobileView === "preview" && "hidden md:block")}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            spellCheck={false}
            className={cn(
              "block min-h-48 w-full resize-none rounded-md border border-border bg-input/20 px-3 py-3 font-mono text-base leading-relaxed outline-none transition-colors",
              "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
              "md:text-sm dark:bg-input/30",
            )}
          />
          <p className="mt-1 px-0.5 text-xs text-muted-foreground">
            Tab 키로 들여쓰기 · Markdown 문법 지원
          </p>
        </div>

        <div className={cn(mobileView === "edit" && "hidden md:block")}>
          <MarkdownView
            source={value}
            size="sm"
            variant="boxed"
            emptyFallback={
              <p className="text-sm text-muted-foreground">
                미리보기가 여기에 표시됩니다
              </p>
            }
            className="min-h-48"
          />
        </div>
      </div>
    </div>
  )
}
