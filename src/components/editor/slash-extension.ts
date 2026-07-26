import { Extension, ReactRenderer, type Editor, type Range } from "@tiptap/react"
import Suggestion from "@tiptap/suggestion"

import { SlashMenu, type SlashMenuRef } from "./slash-menu"

export interface SlashCommandItem {
  key: string
  title: string
  description: string
  iconLabel: string
  run: (props: { editor: Editor; range: Range }) => void
}

export const SLASH_COMMANDS: SlashCommandItem[] = [
  {
    key: "paragraph",
    title: "본문",
    description: "일반 텍스트 단락",
    iconLabel: "T",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setParagraph().run(),
  },
  {
    key: "h1",
    title: "제목 1",
    description: "큰 제목",
    iconLabel: "H1",
    run: ({ editor, range }) =>
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleHeading({ level: 1 })
        .run(),
  },
  {
    key: "h2",
    title: "제목 2",
    description: "중간 제목",
    iconLabel: "H2",
    run: ({ editor, range }) =>
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleHeading({ level: 2 })
        .run(),
  },
  {
    key: "h3",
    title: "제목 3",
    description: "작은 제목",
    iconLabel: "H3",
    run: ({ editor, range }) =>
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleHeading({ level: 3 })
        .run(),
  },
  {
    key: "bulletList",
    title: "글머리 기호",
    description: "동그란 점이 붙는 목록",
    iconLabel: "•",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBulletList().run(),
  },
  {
    key: "orderedList",
    title: "번호 목록",
    description: "1, 2, 3 순서가 매겨지는 목록",
    iconLabel: "1.",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
  },
  {
    key: "blockquote",
    title: "인용",
    description: "인용 블록",
    iconLabel: "❝",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
  },
  {
    key: "codeBlock",
    title: "코드 블록",
    description: "여러 줄 코드",
    iconLabel: "{}",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
  },
  {
    key: "horizontalRule",
    title: "구분선",
    description: "수평 구분선",
    iconLabel: "—",
    run: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
  },
]

function positionPopup(
  popup: HTMLDivElement | null,
  rect: DOMRect | null | undefined,
) {
  if (!popup || !rect) return
  const margin = 8
  const popupRect = popup.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  let left = rect.left
  let top = rect.bottom + margin

  if (left + popupRect.width > viewportWidth - margin) {
    left = Math.max(margin, viewportWidth - popupRect.width - margin)
  }
  if (left < margin) left = margin

  if (top + popupRect.height > viewportHeight - margin) {
    const above = rect.top - margin - popupRect.height
    if (above >= margin) {
      top = above
    } else {
      top = Math.max(margin, viewportHeight - popupRect.height - margin)
    }
  }

  popup.style.left = `${left + window.scrollX}px`
  popup.style.top = `${top + window.scrollY}px`
}

export const SlashExtension = Extension.create({
  name: "slashCommand",

  addProseMirrorPlugins() {
    return [
      Suggestion<SlashCommandItem>({
        editor: this.editor,
        char: "/",
        startOfLine: false,
        items: ({ query }) => {
          const q = query.trim().toLowerCase()
          if (!q) return SLASH_COMMANDS
          return SLASH_COMMANDS.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.key.toLowerCase().includes(q),
          )
        },
        command: ({ editor, range, props }) =>
          props.run({ editor, range }),
        render: () => {
          let component: ReactRenderer<SlashMenuRef> | null = null
          let popup: HTMLDivElement | null = null

          return {
            onStart: (props) => {
              popup = document.createElement("div")
              popup.style.cssText =
                "position:absolute;z-index:50;pointer-events:auto;"
              document.body.appendChild(popup)

              component = new ReactRenderer(SlashMenu, {
                props: {
                  items: props.items,
                  command: (item: SlashCommandItem) => props.command(item),
                },
                editor: props.editor,
              })

              popup.appendChild(component.element as HTMLElement)
              positionPopup(popup, props.clientRect?.())
            },
            onUpdate: (props) => {
              component?.updateProps({
                items: props.items,
                command: (item: SlashCommandItem) => props.command(item),
              })
              positionPopup(popup, props.clientRect?.())
            },
            onKeyDown: (props) => {
              if (props.event.key === "Escape") {
                popup?.remove()
                popup = null
                component?.destroy()
                component = null
                return true
              }
              return component?.ref?.onKeyDown(props) ?? false
            },
            onExit: () => {
              popup?.remove()
              popup = null
              component?.destroy()
              component = null
            },
          }
        },
      }),
    ]
  },
})
