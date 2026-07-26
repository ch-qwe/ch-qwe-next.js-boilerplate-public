"use client"

import * as React from "react"
import dynamic from "next/dynamic"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import type { BlockEditorHandle } from "./block-editor"
import { MarkdownEditor } from "./markdown-editor"

const BlockEditor = dynamic(
  () => import("./block-editor").then((m) => m.BlockEditor),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-48 animate-pulse rounded-md border border-border bg-muted/30" />
    ),
  },
)

interface PostEditorProps {
  value: string
  onChange: (markdown: string) => void
  placeholder?: string
  className?: string
}

type EditorMode = "block" | "markdown"

export function PostEditor({
  value,
  onChange,
  placeholder,
  className,
}: PostEditorProps) {
  const [tab, setTab] = React.useState<EditorMode>("block")
  const blockRef = React.useRef<BlockEditorHandle>(null)

  const handleTabChange = (next: EditorMode) => {
    if (tab === "block" && next === "markdown") {
      const md = blockRef.current?.getMarkdown() ?? value
      if (md !== value) onChange(md)
    }
    setTab(next)
  }

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => handleTabChange(v as EditorMode)}
      className={className}
    >
      <TabsList variant="default">
        <TabsTrigger value="block">블록 에디터</TabsTrigger>
        <TabsTrigger value="markdown">마크다운</TabsTrigger>
      </TabsList>

      <TabsContent value="block">
        {tab === "block" && (
          <BlockEditor
            ref={blockRef}
            initialMarkdown={value}
            onMarkdownChange={onChange}
            placeholder={placeholder}
          />
        )}
      </TabsContent>

      <TabsContent value="markdown">
        {tab === "markdown" && (
          <MarkdownEditor
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </TabsContent>
    </Tabs>
  )
}
