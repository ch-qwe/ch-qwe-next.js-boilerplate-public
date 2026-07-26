import * as React from "react"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"

type MarkdownViewSize = "sm" | "base"
type MarkdownViewVariant = "plain" | "boxed"

export interface MarkdownViewProps {
  source: string
  size?: MarkdownViewSize
  variant?: MarkdownViewVariant
  emptyFallback?: React.ReactNode
  className?: string
}

const sizeClass: Record<MarkdownViewSize, string> = {
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
}

const variantClass: Record<MarkdownViewVariant, string> = {
  plain: "",
  boxed: "rounded-md border border-border bg-muted/20 p-4",
}

const proseClass = cn(
  "prose-style break-words",
  // headings
  "[&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:tracking-tight",
  "[&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight",
  "[&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold",
  // first heading top spacing reset
  "[&>:first-child]:mt-0",
  // paragraphs
  "[&_p]:my-2",
  // lists
  "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5",
  "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5",
  "[&_li]:my-0.5 [&_li>p]:my-0",
  // checkbox list (gfm)
  "[&_li.task-list-item]:list-none [&_li.task-list-item]:-ml-5",
  "[&_input[type=checkbox]]:mr-1.5 [&_input[type=checkbox]]:translate-y-[1px]",
  // blockquote
  "[&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
  // code
  "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_code]:font-mono",
  "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:text-sm",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit",
  // hr
  "[&_hr]:my-6 [&_hr]:border-t [&_hr]:border-border",
  // links
  "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:opacity-80",
  // images
  "[&_img]:my-3 [&_img]:rounded-md [&_img]:max-w-full",
  // tables (gfm)
  "[&_table]:my-3 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
  "[&_th]:border [&_th]:border-border [&_th]:bg-muted/50 [&_th]:px-3 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-medium",
  "[&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-1.5",
  // strong / em
  "[&_strong]:font-semibold",
  "[&_em]:italic",
  // strikethrough (gfm)
  "[&_del]:line-through [&_del]:text-muted-foreground",
)

export function MarkdownView({
  source,
  size = "base",
  variant = "plain",
  emptyFallback,
  className,
}: MarkdownViewProps) {
  const hasContent = source.trim().length > 0
  return (
    <div
      className={cn(
        "text-foreground",
        sizeClass[size],
        variantClass[variant],
        proseClass,
        className,
      )}
    >
      {hasContent ? (
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {source}
        </ReactMarkdown>
      ) : (
        emptyFallback ?? null
      )}
    </div>
  )
}
