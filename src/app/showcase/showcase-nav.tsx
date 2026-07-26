"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Menu01Icon,
  ArrowUp01Icon,
  GridViewIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

/**
 * showcase 페이지의 섹션 이동 네비게이션.
 * app-shell.tsx 패턴 이식:
 *  - 데스크톱(lg+): 좌측 고정 사이드바 — 전체 섹션 스크롤 목록 + 스크롤스파이 하이라이트
 *  - 모바일: 화면 하단 플로팅 툴바(Floating Toolbar) — 가로 스크롤 칩 + 전체목록 Drawer
 *
 * 섹션 라벨은 page.tsx의 <Section title="..."> 순서와 1:1로 일치해야 한다.
 * 새 Section 추가 시 이 배열에도 같은 순서로 추가할 것.
 */
export const SECTION_LABELS = [
  "Button",
  "ButtonGroup",
  "Badge",
  "Alert",
  "Toggle",
  "ToggleGroup",
  "Input",
  "Textarea",
  "Label",
  "Checkbox",
  "Switch",
  "RadioGroup",
  "Select",
  "InputOTP",
  "Slider",
  "Progress",
  "Tabs",
  "Markdown Editor",
  "Accordion",
  "Card",
  "Avatar",
  "Separator",
  "Skeleton",
  "Spinner",
  "Kbd",
  "Item",
  "Tooltip",
  "Popover",
  "Dialog",
  "Sheet",
  "DropdownMenu",
  "Breadcrumb",
  "Table",
  "Pagination",
  "AlertDialog",
  "Drawer",
  "ResponsiveDialog",
  "Calendar",
  "Command",
  "Combobox",
  "HoverCard",
  "ScrollArea",
  "NavigationMenu",
  "ContextMenu",
  "Menubar",
  "Field",
  "InputGroup",
  "NativeSelect",
  "Empty",
  "Collapsible",
  "Carousel",
  "AspectRatio",
  "Resizable",
  "Chart",
  "Domain Toast",
  "Camera (미리보기 + 스냅샷)",
  "QR Scanner (실시간 비디오)",
  "Web Push (푸시 알림)",
] as const

/** Section title → DOM id. page.tsx의 <Section>과 반드시 동일한 규칙을 사용. */
export function sectionId(label: string) {
  return `sec-${label
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")}`
}

const SECTIONS = SECTION_LABELS.map((label) => ({
  label,
  id: sectionId(label),
}))

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

/** IntersectionObserver 기반 스크롤스파이 — 현재 뷰포트 상단 섹션 id 반환 */
function useActiveSection() {
  const [activeId, setActiveId] = React.useState<string>(SECTIONS[0]?.id ?? "")

  React.useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (els.length === 0) return

    // 화면 상단 ~30% 밴드에 들어온 섹션만 후보. 그중 가장 위(top이 작은) 것을 active로.
    const tops = new Map<string, number>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tops.set(e.target.id, e.boundingClientRect.top)
          else tops.delete(e.target.id)
        }
        let best: string | null = null
        let bestTop = Number.POSITIVE_INFINITY
        tops.forEach((top, id) => {
          if (top < bestTop) {
            bestTop = top
            best = id
          }
        })
        if (best) setActiveId(best)
      },
      { rootMargin: "-72px 0px -70% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return activeId
}

export function ShowcaseNav() {
  const activeId = useActiveSection()
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [hideBar, setHideBar] = React.useState(false)
  const chipScrollerRef = React.useRef<HTMLDivElement>(null)

  // 스크롤 방향에 따라 모바일 플로팅 바 숨김/노출 (app-shell hideTabBar 패턴)
  React.useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY && y > 80) setHideBar(true)
      else if (y < lastY) setHideBar(false)
      lastY = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // active 칩을 가로 스크롤러 중앙으로
  React.useEffect(() => {
    const chip = chipScrollerRef.current?.querySelector<HTMLElement>(
      `[data-chip="${activeId}"]`,
    )
    chip?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
  }, [activeId])

  return (
    <>
      {/* ─────────── 데스크톱: 좌측 고정 사이드바 ─────────── */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-background/80 backdrop-blur lg:flex">
        <div className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-5">
          <HugeiconsIcon
            icon={GridViewIcon}
            strokeWidth={2}
            className="size-5 text-primary"
          />
          <span className="text-sm font-semibold tracking-tight">컴포넌트</span>
          <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {SECTIONS.length}
          </span>
        </div>
        <ScrollArea className="flex-1">
          <nav className="p-2">
            <ul className="flex flex-col gap-0.5">
              {SECTIONS.map((s) => {
                const isActive = s.id === activeId
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(s.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "size-1.5 shrink-0 rounded-full transition-colors",
                          isActive ? "bg-primary" : "bg-transparent",
                        )}
                      />
                      <span className="truncate">{s.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </ScrollArea>
      </aside>

      {/* ─────────── 모바일: 플로팅 바텀 툴바 (Floating Toolbar) ─────────── */}
      <div
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 transition-transform duration-300 lg:hidden",
          hideBar && "translate-y-[calc(100%+1rem)]",
        )}
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <div className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center gap-1 rounded-full border border-border bg-background/90 pr-1.5 pl-1 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/75">
          {/* 전체 목록 Drawer 트리거 */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="전체 섹션 목록"
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted/60"
          >
            <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
          </button>

          {/* 가로 스크롤 섹션 칩 */}
          <div
            ref={chipScrollerRef}
            className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map((s) => {
              const isActive = s.id === activeId
              return (
                <button
                  key={s.id}
                  type="button"
                  data-chip={s.id}
                  onClick={() => scrollToSection(s.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "h-9 shrink-0 rounded-full px-3.5 text-sm font-medium whitespace-nowrap transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted/60",
                  )}
                >
                  {s.label}
                </button>
              )
            })}
          </div>

          {/* 맨 위로 */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="맨 위로"
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted/60"
          >
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              strokeWidth={2}
              className="size-5"
            />
          </button>
        </div>
      </div>

      {/* 전체 섹션 그리드 Drawer (모바일 전용) */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>섹션 바로가기</DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="grid grid-cols-2 gap-2 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              {SECTIONS.map((s) => {
                const isActive = s.id === activeId
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setDrawerOpen(false)
                      scrollToSection(s.id)
                    }}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "border-primary/30 bg-primary/5 text-primary"
                        : "border-border text-foreground hover:bg-muted/40",
                    )}
                  >
                    <span className="line-clamp-1">{s.label}</span>
                  </button>
                )
              })}
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  )
}
