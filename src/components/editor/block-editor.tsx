"use client"

import * as React from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  TextBoldIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  LeftToRightListBulletIcon,
  LeftToRightListNumberIcon,
  Link01Icon,
  Image01Icon,
  QuoteDownIcon,
  SourceCodeIcon,
  ArrowTurnBackwardIcon,
  ArrowTurnForwardIcon,
  ParagraphIcon,
  Heading01Icon,
  Heading02Icon,
  Heading03Icon,
  MinusSignIcon,
} from "@hugeicons/core-free-icons"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Markdown } from "tiptap-markdown"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { SlashExtension } from "./slash-extension"

export interface BlockEditorHandle {
  getMarkdown: () => string
  setMarkdown: (markdown: string) => void
  focus: () => void
}

interface BlockEditorProps {
  initialMarkdown: string
  onMarkdownChange: (markdown: string) => void
  placeholder?: string
  className?: string
}

type EditorLike = ReturnType<typeof useEditor>

function getMarkdownFromEditor(editor: EditorLike | null | undefined): string {
  if (!editor) return ""
  const storage = (editor.storage as unknown as Record<string, unknown>)
    .markdown as { getMarkdown: () => string } | undefined
  return storage?.getMarkdown() ?? ""
}

const proseClass = cn(
  "min-h-[12rem] w-full px-3 py-3 text-base md:text-sm leading-relaxed outline-none",
  "[&_.ProseMirror]:min-h-[12rem] [&_.ProseMirror]:outline-none",
  // headings
  "[&_.ProseMirror_h1]:mt-6 [&_.ProseMirror_h1]:mb-3 [&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold",
  "[&_.ProseMirror_h2]:mt-5 [&_.ProseMirror_h2]:mb-2 [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-semibold",
  "[&_.ProseMirror_h3]:mt-4 [&_.ProseMirror_h3]:mb-2 [&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-semibold",
  "[&_.ProseMirror>:first-child]:mt-0",
  // paragraphs
  "[&_.ProseMirror_p]:my-2",
  // lists
  "[&_.ProseMirror_ul]:my-2 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5",
  "[&_.ProseMirror_ol]:my-2 [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5",
  "[&_.ProseMirror_li]:my-0.5 [&_.ProseMirror_li>p]:my-0",
  // blockquote
  "[&_.ProseMirror_blockquote]:my-3 [&_.ProseMirror_blockquote]:border-l-4 [&_.ProseMirror_blockquote]:border-border [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:text-muted-foreground",
  // code
  "[&_.ProseMirror_code]:rounded [&_.ProseMirror_code]:bg-muted [&_.ProseMirror_code]:px-1 [&_.ProseMirror_code]:py-0.5 [&_.ProseMirror_code]:text-[0.9em] [&_.ProseMirror_code]:font-mono",
  "[&_.ProseMirror_pre]:my-3 [&_.ProseMirror_pre]:overflow-x-auto [&_.ProseMirror_pre]:rounded-md [&_.ProseMirror_pre]:bg-muted [&_.ProseMirror_pre]:p-3 [&_.ProseMirror_pre]:text-sm",
  "[&_.ProseMirror_pre_code]:bg-transparent [&_.ProseMirror_pre_code]:p-0",
  // hr
  "[&_.ProseMirror_hr]:my-6 [&_.ProseMirror_hr]:border-t [&_.ProseMirror_hr]:border-border",
  // links
  "[&_.ProseMirror_a]:text-primary [&_.ProseMirror_a]:underline [&_.ProseMirror_a]:underline-offset-4",
  // images
  "[&_.ProseMirror_img]:my-3 [&_.ProseMirror_img]:rounded-md [&_.ProseMirror_img]:max-w-full",
  // strong / em
  "[&_.ProseMirror_strong]:font-semibold",
  "[&_.ProseMirror_em]:italic",
  "[&_.ProseMirror_del]:line-through [&_.ProseMirror_del]:text-muted-foreground",
  // placeholder
  "[&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0 [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-muted-foreground [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]",
)

export const BlockEditor = React.forwardRef<BlockEditorHandle, BlockEditorProps>(
  function BlockEditor(
    {
      initialMarkdown,
      onMarkdownChange,
      placeholder = "내용을 입력하거나 / 를 입력해 명령을 검색하세요",
      className,
    },
    ref,
  ) {
    const onChangeRef = React.useRef(onMarkdownChange)
    React.useEffect(() => {
      onChangeRef.current = onMarkdownChange
    }, [onMarkdownChange])

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          heading: { levels: [1, 2, 3] },
        }),
        Placeholder.configure({
          placeholder,
          emptyEditorClass: "is-editor-empty",
        }),
        Image.configure({ inline: false, allowBase64: false }),
        Link.configure({
          openOnClick: false,
          autolink: true,
          HTMLAttributes: {
            rel: "noopener noreferrer",
            target: "_blank",
          },
        }),
        Markdown.configure({
          html: false,
          tightLists: true,
          bulletListMarker: "-",
          linkify: true,
          breaks: true,
          transformPastedText: true,
          transformCopiedText: false,
        }),
        SlashExtension,
      ],
      content: initialMarkdown,
      immediatelyRender: false,
      onCreate: ({ editor }) => {
        if (initialMarkdown) {
          editor.commands.setContent(initialMarkdown)
        }
      },
      onUpdate: ({ editor }) => {
        onChangeRef.current(getMarkdownFromEditor(editor))
      },
    })

    React.useImperativeHandle(
      ref,
      () => ({
        getMarkdown: () => getMarkdownFromEditor(editor),
        setMarkdown: (markdown: string) => {
          editor?.commands.setContent(markdown)
        },
        focus: () => {
          editor?.commands.focus()
        },
      }),
      [editor],
    )

    const setLink = React.useCallback(() => {
      if (!editor) return
      const previousUrl = editor.getAttributes("link").href as
        | string
        | undefined
      const url = window.prompt("링크 URL", previousUrl ?? "https://")
      if (url === null) return
      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run()
        return
      }
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run()
    }, [editor])

    const addImage = React.useCallback(() => {
      if (!editor) return
      const url = window.prompt("이미지 URL", "https://")
      if (!url) return
      editor.chain().focus().setImage({ src: url }).run()
    }, [editor])

    if (!editor) {
      return (
        <div
          className={cn(
            "min-h-48 animate-pulse rounded-md border border-border bg-muted/30",
            className,
          )}
        />
      )
    }

    return (
      <div
        className={cn(
          "rounded-md border border-border bg-background focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
          className,
        )}
      >
        <Toolbar
          editor={editor}
          onAddLink={setLink}
          onAddImage={addImage}
        />
        <Separator />
        <EditorContent editor={editor} className={proseClass} />
      </div>
    )
  },
)

interface ToolbarProps {
  editor: NonNullable<EditorLike>
  onAddLink: () => void
  onAddImage: () => void
}

function Toolbar({ editor, onAddLink, onAddImage }: ToolbarProps) {
  const isActive = (name: string, attrs?: Record<string, unknown>) =>
    editor.isActive(name, attrs)

  return (
    <div className="flex flex-wrap items-center gap-0.5 px-1.5 py-1.5">
      <ToolbarButton
        label="실행 취소"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        icon={ArrowTurnBackwardIcon}
      />
      <ToolbarButton
        label="다시 실행"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        icon={ArrowTurnForwardIcon}
      />
      <ToolbarDivider />
      <ToolbarButton
        label="본문"
        onClick={() => editor.chain().focus().setParagraph().run()}
        active={isActive("paragraph") && !isActive("heading")}
        icon={ParagraphIcon}
      />
      <ToolbarButton
        label="제목 1"
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        active={isActive("heading", { level: 1 })}
        icon={Heading01Icon}
      />
      <ToolbarButton
        label="제목 2"
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        active={isActive("heading", { level: 2 })}
        icon={Heading02Icon}
      />
      <ToolbarButton
        label="제목 3"
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
        active={isActive("heading", { level: 3 })}
        icon={Heading03Icon}
      />
      <ToolbarDivider />
      <ToolbarButton
        label="굵게"
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={isActive("bold")}
        icon={TextBoldIcon}
      />
      <ToolbarButton
        label="기울임"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={isActive("italic")}
        icon={TextItalicIcon}
      />
      <ToolbarButton
        label="취소선"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={isActive("strike")}
        icon={TextStrikethroughIcon}
      />
      <ToolbarButton
        label="인라인 코드"
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={isActive("code")}
        icon={SourceCodeIcon}
      />
      <ToolbarDivider />
      <ToolbarButton
        label="글머리 기호"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={isActive("bulletList")}
        icon={LeftToRightListBulletIcon}
      />
      <ToolbarButton
        label="번호 목록"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={isActive("orderedList")}
        icon={LeftToRightListNumberIcon}
      />
      <ToolbarButton
        label="인용"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={isActive("blockquote")}
        icon={QuoteDownIcon}
      />
      <ToolbarButton
        label="구분선"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={MinusSignIcon}
      />
      <ToolbarDivider />
      <ToolbarButton
        label="링크"
        onClick={onAddLink}
        active={isActive("link")}
        icon={Link01Icon}
      />
      <ToolbarButton label="이미지" onClick={onAddImage} icon={Image01Icon} />
    </div>
  )
}

function ToolbarDivider() {
  return <span className="mx-0.5 h-5 w-px bg-border" aria-hidden />
}

function ToolbarButton({
  label,
  onClick,
  active,
  disabled,
  icon,
}: {
  label: string
  onClick: () => void
  active?: boolean
  disabled?: boolean
  icon: IconSvgElement
}) {
  return (
    <Button
      type="button"
      variant={active ? "secondary" : "ghost"}
      size="icon-sm"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      <HugeiconsIcon icon={icon} strokeWidth={2} />
    </Button>
  )
}
