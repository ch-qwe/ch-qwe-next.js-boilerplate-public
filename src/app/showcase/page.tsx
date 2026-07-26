"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  Settings01Icon,
  UserIcon,
  Search01Icon,
  Notification01Icon,
  Mail01Icon,
  StarIcon,
  HeartCheckIcon,
  Delete01Icon,
  PencilEdit01Icon,
  Copy01Icon,
  Share01Icon,
  Download01Icon,
  AlertCircleIcon,
  InformationCircleIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  ItemActions,
} from "@/components/ui/item"
import {
  ecommerceToast,
  saasToast,
  fintechToast,
  socialToast,
  messagingToast,
  educationToast,
  healthcareToast,
  foodDeliveryToast,
  crmToast,
  contentToast,
} from "@/components/toast"
import { PostEditorDemo } from "@/components/editor/post-editor-demo"

// ─── Section wrapper ───────────────────────────
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function SubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
      {children}
    </div>
  )
}

// ─── Stateful demos ────────────────────────────
function CalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date())
  return <Calendar mode="single" selected={selected} onSelect={setSelected} />
}

function CalendarDropdownDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date())
  const today = new Date()
  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
      captionLayout="dropdown"
      startMonth={new Date(today.getFullYear() - 50, 0)}
      endMonth={new Date(today.getFullYear() + 5, 11)}
      defaultMonth={selected ?? today}
    />
  )
}

function ResponsiveDialogControlledDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setOpen(true)}>외부 버튼으로 열기</Button>
      <span className="text-xs text-muted-foreground">
        상태: {open ? "열림" : "닫힘"}
      </span>
      <ResponsiveDialog open={open} onOpenChange={setOpen}>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>변경사항을 저장할까요?</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              저장하지 않은 변경사항은 모두 사라집니다.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <ResponsiveDialogFooter>
            <ResponsiveDialogClose asChild>
              <Button variant="outline">취소</Button>
            </ResponsiveDialogClose>
            <Button size="lg" onClick={() => setOpen(false)}>
              저장
            </Button>
          </ResponsiveDialogFooter>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  )
}

function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        명령 팔레트 열기
        <Kbd className="ml-2">⌘K</Kbd>
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
                저장
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="계정">
              <CommandItem onSelect={() => setOpen(false)}>프로필</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>로그아웃</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

function ContextMenuDemo() {
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
        <ContextMenuItem>
          뒤로
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          앞으로
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>보기 옵션</ContextMenuLabel>
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
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>다른 앱으로 열기</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>브라우저</ContextMenuItem>
            <ContextMenuItem>코드 편집기</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">삭제</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function MenubarDemo() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [profile, setProfile] = React.useState("andy")
  return (
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
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>공유</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>이메일 링크</MenubarItem>
              <MenubarItem>메시지</MenubarItem>
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
            복사
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            붙여넣기
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>보기</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>옵션</MenubarLabel>
            <MenubarCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              북마크 바 표시
            </MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarLabel>프로필</MenubarLabel>
            <MenubarRadioGroup value={profile} onValueChange={setProfile}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

const chartData = [
  { month: "1월", desktop: 186, mobile: 80 },
  { month: "2월", desktop: 305, mobile: 200 },
  { month: "3월", desktop: 237, mobile: 120 },
  { month: "4월", desktop: 73, mobile: 190 },
  { month: "5월", desktop: 209, mobile: 130 },
  { month: "6월", desktop: 214, mobile: 140 },
]

const chartConfig: ChartConfig = {
  desktop: { label: "데스크톱", color: "var(--chart-1)" },
  mobile: { label: "모바일", color: "var(--chart-2)" },
}

const comboboxFrameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "Gatsby",
]

const scrollAreaTags = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Storybook", "Zustand", "Zod", "React Hook Form", "Vitest",
  "Playwright", "Vercel", "Firebase", "Supabase", "Prisma",
  "tRPC", "GraphQL", "REST API", "WebSocket", "Docker",
]

// ─── Page ──────────────────────────────────────
export default function ShowcasePage() {
  return (
    <TooltipProvider>
      <div className="mx-auto max-w-4xl space-y-12 p-8 pb-24">
        <div>
          <h1 className="text-xl font-bold tracking-tight">UI Showcase</h1>
          <p className="text-sm text-muted-foreground">
            모든 UI 컴포넌트와 Variants를 한눈에 확인하세요.
          </p>
        </div>

        {/* ════════════════════════════════════════ Button ════════════════════════════════════════ */}
        <Section title="Button">
          <SubSection title="Variants">
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </SubSection>

          <SubSection title="Sizes">
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xs">xs</Button>
              <Button size="sm">sm</Button>
              <Button size="default">default</Button>
              <Button size="lg">lg</Button>
              <Button size="icon-xs">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
              </Button>
              <Button size="icon-sm">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
              </Button>
              <Button size="icon">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
              </Button>
              <Button size="icon-lg">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
              </Button>
            </div>
          </SubSection>

          <SubSection title="With Icons">
            <div className="flex flex-wrap items-center gap-2">
              <Button>
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} data-icon="inline-start" />
                Icon Start
              </Button>
              <Button variant="outline">
                Icon End
                <HugeiconsIcon icon={Share01Icon} strokeWidth={2} data-icon="inline-end" />
              </Button>
              <Button variant="secondary">
                <HugeiconsIcon icon={Download01Icon} strokeWidth={2} data-icon="inline-start" />
                Download
              </Button>
            </div>
          </SubSection>

          <SubSection title="States">
            <div className="flex flex-wrap items-center gap-2">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ ButtonGroup ════════════════════════════════════════ */}
        <Section title="ButtonGroup">
          <SubSection title="Horizontal (default)">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </SubSection>

          <SubSection title="Vertical">
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </SubSection>

          <SubSection title="With Text">
            <ButtonGroup>
              <ButtonGroupText>https://</ButtonGroupText>
              <Input placeholder="example.com" />
            </ButtonGroup>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Badge ════════════════════════════════════════ */}
        <Section title="Badge">
          <SubSection title="Variants">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="ghost">Ghost</Badge>
              <Badge variant="link">Link</Badge>
            </div>
          </SubSection>

          <SubSection title="With Icons">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} data-icon="inline-start" />
                Success
              </Badge>
              <Badge variant="destructive">
                <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} data-icon="inline-start" />
                Error
              </Badge>
              <Badge variant="outline">
                <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} data-icon="inline-start" />
                Info
              </Badge>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Alert ════════════════════════════════════════ */}
        <Section title="Alert">
          <SubSection title="Variants">
            <div className="space-y-3">
              <Alert>
                <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  기본 스타일의 알림 메시지입니다.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>
                  에러 또는 위험 메시지를 표시합니다.
                </AlertDescription>
              </Alert>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Toggle ════════════════════════════════════════ */}
        <Section title="Toggle">
          <SubSection title="Variants">
            <div className="flex flex-wrap items-center gap-2">
              <Toggle variant="default" aria-label="Default toggle">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
                Default
              </Toggle>
              <Toggle variant="outline" aria-label="Outline toggle">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
                Outline
              </Toggle>
            </div>
          </SubSection>

          <SubSection title="Sizes">
            <div className="flex flex-wrap items-center gap-2">
              <Toggle size="sm" aria-label="Small">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
                sm
              </Toggle>
              <Toggle size="default" aria-label="Default">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
                default
              </Toggle>
              <Toggle size="lg" aria-label="Large">
                <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
                lg
              </Toggle>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ ToggleGroup ════════════════════════════════════════ */}
        <Section title="ToggleGroup">
          <SubSection title="Default (spacing=0)">
            <ToggleGroup variant="outline">
              <ToggleGroupItem value="a" aria-label="A">
                <HugeiconsIcon icon={PencilEdit01Icon} strokeWidth={2} />
              </ToggleGroupItem>
              <ToggleGroupItem value="b" aria-label="B">
                <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
              </ToggleGroupItem>
              <ToggleGroupItem value="c" aria-label="C">
                <HugeiconsIcon icon={Delete01Icon} strokeWidth={2} />
              </ToggleGroupItem>
            </ToggleGroup>
          </SubSection>

          <SubSection title="With Spacing">
            <ToggleGroup variant="outline" spacing={1}>
              <ToggleGroupItem value="a">Option A</ToggleGroupItem>
              <ToggleGroupItem value="b">Option B</ToggleGroupItem>
              <ToggleGroupItem value="c">Option C</ToggleGroupItem>
            </ToggleGroup>
          </SubSection>

          <SubSection title="Vertical">
            <ToggleGroup variant="outline" orientation="vertical">
              <ToggleGroupItem value="a" aria-label="A">
                <HugeiconsIcon icon={PencilEdit01Icon} strokeWidth={2} />
              </ToggleGroupItem>
              <ToggleGroupItem value="b" aria-label="B">
                <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
              </ToggleGroupItem>
              <ToggleGroupItem value="c" aria-label="C">
                <HugeiconsIcon icon={Delete01Icon} strokeWidth={2} />
              </ToggleGroupItem>
            </ToggleGroup>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Input ════════════════════════════════════════ */}
        <Section title="Input">
          <div className="grid max-w-sm gap-3">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Invalid input" aria-invalid="true" />
            <Input type="password" placeholder="Password" />
            <Input type="file" />
          </div>
        </Section>

        {/* ════════════════════════════════════════ Textarea ════════════════════════════════════════ */}
        <Section title="Textarea">
          <div className="grid max-w-sm gap-3">
            <Textarea placeholder="기본 텍스트 영역" />
            <Textarea placeholder="비활성화" disabled />
            <Textarea placeholder="유효하지 않음" aria-invalid="true" />
          </div>
        </Section>

        {/* ════════════════════════════════════════ Label ════════════════════════════════════════ */}
        <Section title="Label">
          <div className="grid max-w-sm gap-3">
            <div className="flex items-center gap-2">
              <Label htmlFor="label-demo">Label</Label>
              <Input id="label-demo" placeholder="Input with label" />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Checkbox ════════════════════════════════════════ */}
        <Section title="Checkbox">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="check-1" />
              <Label htmlFor="check-1">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check-2" defaultChecked />
              <Label htmlFor="check-2">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check-3" disabled />
              <Label htmlFor="check-3">Disabled</Label>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Switch ════════════════════════════════════════ */}
        <Section title="Switch">
          <SubSection title="Sizes">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Switch size="sm" id="switch-sm" />
                <Label htmlFor="switch-sm">Small</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch size="default" id="switch-default" />
                <Label htmlFor="switch-default">Default</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="switch-checked" defaultChecked />
                <Label htmlFor="switch-checked">Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="switch-disabled" disabled />
                <Label htmlFor="switch-disabled">Disabled</Label>
              </div>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ RadioGroup ════════════════════════════════════════ */}
        <Section title="RadioGroup">
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="radio-1" />
              <Label htmlFor="radio-1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="radio-2" />
              <Label htmlFor="radio-2">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="radio-3" />
              <Label htmlFor="radio-3">Option 3</Label>
            </div>
          </RadioGroup>
        </Section>

        {/* ════════════════════════════════════════ Select ════════════════════════════════════════ */}
        <Section title="Select">
          <SubSection title="Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Select defaultValue="apple">
                <SelectTrigger size="default">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="cherry">Cherry</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="apple">
                <SelectTrigger size="sm">
                  <SelectValue placeholder="Small" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="cherry">Cherry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ InputOTP ════════════════════════════════════════ */}
        <Section title="InputOTP">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Section>

        {/* ════════════════════════════════════════ Slider ════════════════════════════════════════ */}
        <Section title="Slider">
          <div className="grid max-w-sm gap-6">
            <SubSection title="Single Value">
              <Slider defaultValue={[40]} max={100} />
            </SubSection>
            <SubSection title="Range">
              <Slider defaultValue={[20, 80]} max={100} />
            </SubSection>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Progress ════════════════════════════════════════ */}
        <Section title="Progress">
          <div className="grid max-w-sm gap-4">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </Section>

        {/* ════════════════════════════════════════ Tabs ════════════════════════════════════════ */}
        <Section title="Tabs">
          <SubSection title='variant="default"'>
            <Tabs defaultValue="tab1">
              <TabsList variant="default">
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="pt-2 text-muted-foreground">Account 탭 컨텐츠</p>
              </TabsContent>
              <TabsContent value="tab2">
                <p className="pt-2 text-muted-foreground">
                  Password 탭 컨텐츠
                </p>
              </TabsContent>
              <TabsContent value="tab3">
                <p className="pt-2 text-muted-foreground">
                  Settings 탭 컨텐츠
                </p>
              </TabsContent>
            </Tabs>
          </SubSection>

          <SubSection title='variant="line"'>
            <Tabs defaultValue="tab1">
              <TabsList variant="line">
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="pt-2 text-muted-foreground">Account 탭 컨텐츠</p>
              </TabsContent>
            </Tabs>
          </SubSection>

          <SubSection title="Vertical">
            <Tabs defaultValue="tab1" orientation="vertical">
              <TabsList variant="default">
                <TabsTrigger value="tab1">General</TabsTrigger>
                <TabsTrigger value="tab2">Security</TabsTrigger>
                <TabsTrigger value="tab3">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="pl-4 text-muted-foreground">General 설정</p>
              </TabsContent>
            </Tabs>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Markdown Editor ════════════════════════════════════════ */}
        <Section title="Markdown Editor">
          <p className="text-sm text-muted-foreground">
            Tiptap 기반 블록 에디터와 textarea + 분할 프리뷰 마크다운 에디터를
            탭으로 전환합니다. 두 모드는 같은 마크다운 문자열을 공유해 어디서
            편집해도 결과가 일치합니다.
          </p>
          <PostEditorDemo />
        </Section>

        {/* ════════════════════════════════════════ Accordion ════════════════════════════════════════ */}
        <Section title="Accordion">
          <Accordion className="max-w-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>첫 번째 항목</AccordionTrigger>
              <AccordionContent>
                아코디언의 첫 번째 컨텐츠입니다. 클릭하여 토글할 수 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>두 번째 항목</AccordionTrigger>
              <AccordionContent>
                두 번째 컨텐츠입니다. 여러 개의 아코디언 아이템을 사용할 수
                있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>세 번째 항목</AccordionTrigger>
              <AccordionContent>
                세 번째 컨텐츠입니다. 각 아이템은 독립적으로 열고 닫을 수
                있습니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* ════════════════════════════════════════ Card ════════════════════════════════════════ */}
        <Section title="Card">
          <SubSection title="Sizes">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card size="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    기본 크기의 카드 컴포넌트입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>카드의 본문 내용이 여기에 들어갑니다.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card size="sm">
                <CardHeader>
                  <CardTitle>Small Card</CardTitle>
                  <CardDescription>작은 크기의 카드입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>더 작은 패딩과 간격을 사용합니다.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Avatar ════════════════════════════════════════ */}
        <Section title="Avatar">
          <SubSection title="Sizes">
            <div className="flex items-center gap-4">
              <Avatar size="sm">
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <Avatar size="default">
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </div>
          </SubSection>

          <SubSection title="With Image & Badge">
            <div className="flex items-center gap-4">
              <Avatar size="default">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge />
              </Avatar>
            </div>
          </SubSection>

          <SubSection title="Avatar Group">
            <AvatarGroup>
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Separator ════════════════════════════════════════ */}
        <Section title="Separator">
          <SubSection title="Horizontal">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">위 텍스트</p>
              <Separator orientation="horizontal" />
              <p className="text-xs text-muted-foreground">아래 텍스트</p>
            </div>
          </SubSection>
          <SubSection title="Vertical">
            <div className="flex h-8 items-center gap-2">
              <span className="text-xs">좌측</span>
              <Separator orientation="vertical" />
              <span className="text-xs">우측</span>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Skeleton ════════════════════════════════════════ */}
        <Section title="Skeleton">
          <div className="flex items-center gap-4">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Spinner ════════════════════════════════════════ */}
        <Section title="Spinner">
          <div className="flex items-center gap-4">
            <Spinner className="size-3" />
            <Spinner />
            <Spinner className="size-6" />
            <Spinner className="size-8" />
          </div>
        </Section>

        {/* ════════════════════════════════════════ Kbd ════════════════════════════════════════ */}
        <Section title="Kbd">
          <div className="flex flex-wrap items-center gap-2">
            <Kbd>Esc</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Tab</Kbd>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
            <KbdGroup>
              <Kbd>Cmd</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Item ════════════════════════════════════════ */}
        <Section title="Item">
          <SubSection title="Variants">
            <ItemGroup className="max-w-md">
              <Item variant="default">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Default Variant</ItemTitle>
                  <ItemDescription>
                    border-transparent 스타일의 기본 아이템
                  </ItemDescription>
                </ItemContent>
              </Item>

              <Item variant="outline">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Outline Variant</ItemTitle>
                  <ItemDescription>
                    border가 보이는 아웃라인 스타일
                  </ItemDescription>
                </ItemContent>
              </Item>

              <Item variant="muted">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Notification01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Muted Variant</ItemTitle>
                  <ItemDescription>
                    배경색이 있는 뮤트 스타일
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon-xs">
                    <HugeiconsIcon icon={Delete01Icon} strokeWidth={2} />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </SubSection>

          <SubSection title="Sizes">
            <ItemGroup className="max-w-md">
              <Item variant="outline" size="default">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Default Size</ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="outline" size="sm">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Small Size</ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="outline" size="xs">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Extra Small Size</ItemTitle>
                </ItemContent>
              </Item>
            </ItemGroup>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Tooltip ════════════════════════════════════════ */}
        <Section title="Tooltip">
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Top
              </TooltipTrigger>
              <TooltipContent side="top">Top tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Bottom
              </TooltipTrigger>
              <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Left
              </TooltipTrigger>
              <TooltipContent side="left">Left tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Right
              </TooltipTrigger>
              <TooltipContent side="right">Right tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                With Kbd
              </TooltipTrigger>
              <TooltipContent>
                Save <Kbd>Ctrl+S</Kbd>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Popover ════════════════════════════════════════ */}
        <Section title="Popover">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open Popover
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Popover Title</PopoverTitle>
                <PopoverDescription>
                  팝오버 설명 텍스트입니다.
                </PopoverDescription>
              </PopoverHeader>
              <div className="grid gap-2">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </div>
            </PopoverContent>
          </Popover>
        </Section>

        {/* ════════════════════════════════════════ Dialog ════════════════════════════════════════ */}
        <Section title="Dialog">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open Dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  다이얼로그 설명 텍스트입니다. 모달 형태로 표시됩니다.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-xs text-muted-foreground">
                  다이얼로그 본문 내용
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        {/* ════════════════════════════════════════ Sheet ════════════════════════════════════════ */}
        <Section title="Sheet">
          <SubSection title="Sides">
            <div className="flex flex-wrap gap-2">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Sheet key={side}>
                  <SheetTrigger render={<Button variant="outline" />}>
                    {side}
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>
                      <SheetTitle>Sheet ({side})</SheetTitle>
                      <SheetDescription>
                        {side} 방향의 시트입니다.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ DropdownMenu ════════════════════════════════════════ */}
        <Section title="DropdownMenu">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <HugeiconsIcon icon={Delete01Icon} strokeWidth={2} />
                  Delete
                </DropdownMenuItem>
             </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* ════════════════════════════════════════ Breadcrumb ════════════════════════════════════════ */}
        <Section title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        {/* ════════════════════════════════════════ Table ════════════════════════════════════════ */}
        <Section title="Table">
          <Table>
            <TableCaption>최근 주문 목록</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>
                  <Badge variant="default">Paid</Badge>
                </TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV002</TableCell>
                <TableCell>
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV003</TableCell>
                <TableCell>
                  <Badge variant="destructive">Failed</Badge>
                </TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        {/* ════════════════════════════════════════ Pagination ════════════════════════════════════════ */}
        <Section title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        {/* ════════════════════════════════════════ AlertDialog ════════════════════════════════════════ */}
        <Section title="AlertDialog">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              계정 삭제
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말 삭제하시겠어요?</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구
                  삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction>삭제</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Section>

        {/* ════════════════════════════════════════ Drawer ════════════════════════════════════════ */}
        <Section title="Drawer">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Drawer 열기</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer 제목</DrawerTitle>
                <DrawerDescription>
                  하단에서 올라오는 모바일 친화적 시트입니다.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                Drawer 본문 내용이 여기에 표시됩니다.
              </div>
              <DrawerFooter>
                <Button>확인</Button>
                <DrawerClose asChild>
                  <Button variant="outline">취소</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Section>

        {/* ════════════════════════════════════════ ResponsiveDialog ════════════════════════════════════════ */}
        <Section title="ResponsiveDialog">
          <SubSection title="Uncontrolled (asChild trigger)">
            <p className="text-xs text-muted-foreground">
              모바일(&lt;1024px) → Drawer / 데스크톱(≥1024px) → Dialog. 창 폭을 줄였다 늘려 확인.
            </p>
            <ResponsiveDialog>
              <ResponsiveDialogTrigger asChild>
                <Button variant="outline">반응형 다이얼로그 열기</Button>
              </ResponsiveDialogTrigger>
              <ResponsiveDialogContent>
                <ResponsiveDialogHeader>
                  <ResponsiveDialogTitle>프로필 편집</ResponsiveDialogTitle>
                  <ResponsiveDialogDescription>
                    모바일에서는 하단 시트로, 데스크톱에서는 가운데 모달로 표시됩니다.
                  </ResponsiveDialogDescription>
                </ResponsiveDialogHeader>
                <ResponsiveDialogBody className="space-y-3 py-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="rd-name">이름</Label>
                    <Input id="rd-name" placeholder="홍길동" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="rd-bio">자기소개</Label>
                    <Textarea id="rd-bio" rows={3} placeholder="간단한 소개를 작성해주세요" />
                  </div>
                </ResponsiveDialogBody>
                <ResponsiveDialogFooter>
                  <ResponsiveDialogClose asChild>
                    <Button variant="outline">취소</Button>
                  </ResponsiveDialogClose>
                  <Button size="lg">저장</Button>
                </ResponsiveDialogFooter>
              </ResponsiveDialogContent>
            </ResponsiveDialog>
          </SubSection>

          <SubSection title="Controlled (open state)">
            <ResponsiveDialogControlledDemo />
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Calendar ════════════════════════════════════════ */}
        <Section title="Calendar">
          <SubSection title="Single Selection">
            <CalendarDemo />
          </SubSection>
          <SubSection title="Year/Month Dropdown">
            <p className="text-xs text-muted-foreground">
              상단 캡션의 연/월을 드롭다운으로 빠르게 변경. 생일·과거 날짜 입력에 적합 (현재 기준 -50년 ~ +5년).
            </p>
            <CalendarDropdownDemo />
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Command ════════════════════════════════════════ */}
        <Section title="Command">
          <SubSection title="Inline">
            <div className="w-72 rounded border shadow-sm">
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
                      설정
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </SubSection>

          <SubSection title="Dialog (⌘K Palette)">
            <CommandDialogDemo />
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Combobox ════════════════════════════════════════ */}
        <Section title="Combobox">
          <SubSection title="Default">
            <div className="w-72">
              <Combobox items={comboboxFrameworks}>
                <ComboboxInput
                  placeholder="프레임워크 검색..."
                  showTrigger
                  showClear
                />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
                    {comboboxFrameworks.map((fw) => (
                      <ComboboxItem key={fw} value={fw}>
                        {fw}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </SubSection>

          <SubSection title="With Groups">
            <div className="w-72">
              <Combobox
                items={["react", "vue", "nodejs", "django", "react-native"]}
              >
                <ComboboxInput placeholder="기술 검색..." showTrigger showClear />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
                    <ComboboxGroup>
                      <ComboboxLabel>프론트엔드</ComboboxLabel>
                      <ComboboxItem value="react">React</ComboboxItem>
                      <ComboboxItem value="vue">Vue</ComboboxItem>
                    </ComboboxGroup>
                    <ComboboxSeparator />
                    <ComboboxGroup>
                      <ComboboxLabel>백엔드</ComboboxLabel>
                      <ComboboxItem value="nodejs">Node.js</ComboboxItem>
                      <ComboboxItem value="django">Django</ComboboxItem>
                    </ComboboxGroup>
                    <ComboboxSeparator />
                    <ComboboxGroup>
                      <ComboboxLabel>모바일</ComboboxLabel>
                      <ComboboxItem value="react-native">
                        React Native
                      </ComboboxItem>
                    </ComboboxGroup>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ HoverCard ════════════════════════════════════════ */}
        <Section title="HoverCard">
          <HoverCard>
            <HoverCardTrigger className="cursor-pointer text-sm underline underline-offset-2">
              @johndoe
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center bg-muted text-xs font-medium">
                  JD
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">@johndoe</p>
                  <p className="text-sm text-muted-foreground">
                    풀스택 개발자. 모던 웹 도구를 만듭니다.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Section>

        {/* ════════════════════════════════════════ ScrollArea ════════════════════════════════════════ */}
        <Section title="ScrollArea">
          <SubSection title="Vertical">
            <ScrollArea className="h-56 w-64 rounded border p-3">
              <h4 className="mb-3 text-sm font-medium">기술 스택</h4>
              <div className="space-y-1">
                {scrollAreaTags.map((tag) => (
                  <div
                    key={tag}
                    className="border-b py-1 text-sm text-muted-foreground last:border-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SubSection>

          <SubSection title="Horizontal">
            <ScrollArea className="w-72 whitespace-nowrap rounded border">
              <div className="flex gap-2 p-3">
                {scrollAreaTags.map((tag) => (
                  <div
                    key={tag}
                    className="shrink-0 rounded border bg-muted px-3 py-1.5 text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ NavigationMenu ════════════════════════════════════════ */}
        <Section title="NavigationMenu">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 md:w-64">
                    <li>
                      <NavigationMenuLink href="#">
                        <div className="font-medium">소개</div>
                        <p className="text-muted-foreground">
                          제품의 기능을 소개합니다.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        <div className="font-medium">설치</div>
                        <p className="text-muted-foreground">
                          빠르게 시작하는 방법을 안내합니다.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>컴포넌트</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-1 p-2 md:w-80">
                    <li>
                      <NavigationMenuLink href="#">버튼</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">입력</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">모달</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">테이블</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  문서
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Section>

        {/* ════════════════════════════════════════ ContextMenu ════════════════════════════════════════ */}
        <Section title="ContextMenu">
          <ContextMenuDemo />
        </Section>

        {/* ════════════════════════════════════════ Menubar ════════════════════════════════════════ */}
        <Section title="Menubar">
          <MenubarDemo />
        </Section>

        {/* ════════════════════════════════════════ Field ════════════════════════════════════════ */}
        <Section title="Field">
          <SubSection title="Default">
            <div className="max-w-sm">
              <Field>
                <FieldLabel htmlFor="field-email">이메일</FieldLabel>
                <Input
                  id="field-email"
                  type="email"
                  placeholder="name@example.com"
                />
                <FieldDescription>업무용 이메일을 입력하세요.</FieldDescription>
              </Field>
            </div>
          </SubSection>

          <SubSection title="With Error">
            <div className="max-w-sm">
              <Field data-invalid="true">
                <FieldLabel htmlFor="field-username">사용자명</FieldLabel>
                <Input
                  id="field-username"
                  placeholder="사용자명 입력"
                  aria-invalid="true"
                />
                <FieldError>이미 사용 중인 사용자명입니다.</FieldError>
              </Field>
            </div>
          </SubSection>

          <SubSection title="With Content (Title + Description)">
            <div className="max-w-sm">
              <Field>
                <FieldLabel htmlFor="field-bio">소개</FieldLabel>
                <FieldContent>
                  <FieldTitle>자기소개를 작성해주세요</FieldTitle>
                  <FieldDescription>
                    최대 200자까지 입력할 수 있습니다.
                  </FieldDescription>
                </FieldContent>
                <Input id="field-bio" placeholder="자기소개 입력" />
              </Field>
            </div>
          </SubSection>

          <SubSection title="Group of Fields">
            <div className="max-w-sm">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="g-name">이름</FieldLabel>
                  <Input id="g-name" placeholder="이름 입력" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="g-phone">전화번호</FieldLabel>
                  <Input id="g-phone" type="tel" placeholder="010-0000-0000" />
                </Field>
              </FieldGroup>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ InputGroup ════════════════════════════════════════ */}
        <Section title="InputGroup">
          <SubSection title="Prefix Text">
            <div className="max-w-sm">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="example.com" />
              </InputGroup>
            </div>
          </SubSection>

          <SubSection title="With Search Icon & Button">
            <div className="max-w-sm">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    strokeWidth={2}
                    className="size-4 text-muted-foreground"
                  />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton variant="ghost" size="xs">
                    검색
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </SubSection>

          <SubSection title="Currency">
            <div className="max-w-sm">
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="number" placeholder="0.00" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>USD</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ NativeSelect ════════════════════════════════════════ */}
        <Section title="NativeSelect">
          <SubSection title="Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <NativeSelect>
                <NativeSelectOption value="">선택하세요</NativeSelectOption>
                <NativeSelectOption value="apple">사과</NativeSelectOption>
                <NativeSelectOption value="banana">바나나</NativeSelectOption>
                <NativeSelectOption value="orange">오렌지</NativeSelectOption>
              </NativeSelect>
              <NativeSelect size="sm">
                <NativeSelectOption value="">Small</NativeSelectOption>
                <NativeSelectOption value="apple">사과</NativeSelectOption>
                <NativeSelectOption value="banana">바나나</NativeSelectOption>
              </NativeSelect>
            </div>
          </SubSection>

          <SubSection title="With Groups">
            <NativeSelect>
              <NativeSelectOption value="">카테고리 선택</NativeSelectOption>
              <NativeSelectOptGroup label="과일">
                <NativeSelectOption value="apple">사과</NativeSelectOption>
                <NativeSelectOption value="banana">바나나</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="채소">
                <NativeSelectOption value="carrot">당근</NativeSelectOption>
                <NativeSelectOption value="spinach">시금치</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Empty ════════════════════════════════════════ */}
        <Section title="Empty">
          <SubSection title="With Icon & Action">
            <div className="max-w-sm rounded border">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <HugeiconsIcon
                      icon={InformationCircleIcon}
                      strokeWidth={2}
                    />
                  </EmptyMedia>
                  <EmptyTitle>데이터가 없습니다</EmptyTitle>
                  <EmptyDescription>
                    표시할 항목이 없습니다. 새로운 항목을 추가해보세요.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="sm">항목 추가</Button>
                </EmptyContent>
              </Empty>
            </div>
          </SubSection>

          <SubSection title="With Multiple Actions">
            <div className="max-w-sm rounded border">
              <Empty>
                <EmptyHeader>
                  <EmptyTitle>받은 편지함이 비어 있습니다</EmptyTitle>
                  <EmptyDescription>
                    새 메시지를 작성하거나 동료를 초대하세요.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="sm">메시지 작성</Button>
                  <Button size="sm" variant="outline">
                    동료 초대
                  </Button>
                </EmptyContent>
              </Empty>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Collapsible ════════════════════════════════════════ */}
        <Section title="Collapsible">
          <div className="max-w-sm">
            <Collapsible defaultOpen>
              <div className="flex items-center justify-between rounded border px-3 py-2">
                <span className="text-sm font-medium">고급 설정</span>
                <CollapsibleTrigger
                  render={<Button variant="ghost" size="sm" />}
                >
                  토글
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div className="space-y-1 rounded border border-t-0 px-3 py-2 text-sm text-muted-foreground">
                  <p>이 영역은 펼치고 접을 수 있습니다.</p>
                  <p>Accordion보다 단순한 단일 토글이 필요할 때 사용합니다.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Carousel ════════════════════════════════════════ */}
        <Section title="Carousel">
          <SubSection title="Single Item">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
                  <CarouselItem key={i}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{i}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </SubSection>

          <SubSection title="Multiple Items">
            <Carousel
              opts={{ align: "start" }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
                  <CarouselItem key={i} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-4">
                          <span className="text-2xl font-semibold">{i}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ AspectRatio ════════════════════════════════════════ */}
        <Section title="AspectRatio">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs text-muted-foreground">16 : 9</p>
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded border bg-muted"
              >
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  16 : 9
                </div>
              </AspectRatio>
            </div>
            <div>
              <p className="mb-2 text-xs text-muted-foreground">1 : 1</p>
              <AspectRatio
                ratio={1}
                className="overflow-hidden rounded border bg-muted"
              >
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  1 : 1
                </div>
              </AspectRatio>
            </div>
            <div>
              <p className="mb-2 text-xs text-muted-foreground">4 : 3</p>
              <AspectRatio
                ratio={4 / 3}
                className="overflow-hidden rounded border bg-muted"
              >
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  4 : 3
                </div>
              </AspectRatio>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════════ Resizable ════════════════════════════════════════ */}
        <Section title="Resizable">
          <SubSection title="Horizontal">
            <div className="h-48 max-w-lg">
              <ResizablePanelGroup
                orientation="horizontal"
                className="rounded border"
              >
                <ResizablePanel defaultSize={25} minSize={15}>
                  <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                    <span className="text-xs text-muted-foreground">
                      사이드바
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm text-muted-foreground">
                      메인 콘텐츠
                    </span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={25} minSize={15}>
                  <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                    <span className="text-xs text-muted-foreground">속성</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </SubSection>

          <SubSection title="Vertical">
            <div className="h-64 max-w-sm">
              <ResizablePanelGroup
                orientation="vertical"
                className="rounded border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm text-muted-foreground">상단</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm text-muted-foreground">하단</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </SubSection>
        </Section>

        {/* ════════════════════════════════════════ Chart ════════════════════════════════════════ */}
        <Section title="Chart">
          <ChartContainer
            config={chartConfig}
            className="h-[280px] w-full max-w-2xl"
          >
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="desktop"
                fill="var(--color-desktop)"
                radius={4}
              />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Section>

        {/* ════════════════════════════════════════ Domain Toast ════════════════════════════════════════ */}
        <Section title="Domain Toast">
          <SubSection title="이커머스">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => ecommerceToast.cart.added({ productName: "에어팟 프로", quantity: 1 })}>장바구니 추가</Button>
              <Button variant="outline" onClick={() => ecommerceToast.order.confirmed({ orderId: "ORD-2024-1234", total: "89,000원" })}>주문 완료</Button>
              <Button variant="outline" onClick={() => ecommerceToast.order.failed({ reason: "결제 한도 초과" })}>주문 실패</Button>
              <Button variant="outline" onClick={() => ecommerceToast.delivery.tracking({ orderId: "ORD-2024-1234", step: 3, totalSteps: 5, currentStatus: "배송 중" })}>배송 추적</Button>
              <Button variant="outline" onClick={() => ecommerceToast.product.priceDropped({ productName: "갤럭시 S24", price: "899,000원" })}>가격 인하</Button>
              <Button variant="outline" onClick={() => ecommerceToast.coupon.applied({ couponName: "신규가입 쿠폰", discount: "15%" })}>쿠폰 적용</Button>
            </div>
          </SubSection>
          <SubSection title="SaaS / 프로젝트 관리">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => saasToast.task.completed({ taskName: "API 엔드포인트 구현" })}>작업 완료</Button>
              <Button variant="outline" onClick={() => saasToast.team.invited({ email: "dev@example.com" })}>팀원 초대</Button>
              <Button variant="outline" onClick={() => saasToast.document.linkCopied()}>링크 복사</Button>
              <Button variant="outline" onClick={() => saasToast.subscription.trialExpiring({ daysLeft: 3 })}>체험 종료</Button>
              <Button variant="outline" onClick={() => saasToast.integration.apiKeyCreated()}>API 키 생성</Button>
            </div>
          </SubSection>
          <SubSection title="핀테크 / 금융">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => fintechToast.transfer.sent({ amount: "50,000원", recipient: "김영희" })}>송금 완료</Button>
              <Button variant="outline" onClick={() => fintechToast.security.newDeviceLogin({ device: "iPhone 15 Pro (서울)" })}>새 기기 감지</Button>
              <Button variant="outline" onClick={() => fintechToast.investment.targetReached({ stock: "AAPL", price: "$195.00" })}>목표가 도달</Button>
              <Button variant="outline" onClick={() => fintechToast.account.insufficientBalance()}>잔액 부족</Button>
            </div>
          </SubSection>
          <SubSection title="소셜 미디어">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => socialToast.interaction.commented({ userName: "이수진", preview: "정말 좋은 글이네요!" })}>댓글 알림</Button>
              <Button variant="outline" onClick={() => socialToast.follow.requestReceived({ userName: "홍길동" })}>팔로우 요청</Button>
              <Button variant="outline" onClick={() => socialToast.media.videoUploading({ progress: 45 })}>동영상 업로드</Button>
            </div>
          </SubSection>
          <SubSection title="메시징">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => messagingToast.message.received({ sender: "김영희", preview: "회의 시간 변경되었어요" })}>새 메시지</Button>
              <Button variant="outline" onClick={() => messagingToast.call.missed({ caller: "이수진" })}>부재중 전화</Button>
              <Button variant="outline" onClick={() => messagingToast.status.disconnected()}>연결 끊김</Button>
            </div>
          </SubSection>
          <SubSection title="교육 / LMS">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => educationToast.course.completed({ courseName: "React 마스터 클래스" })}>강의 완료</Button>
              <Button variant="outline" onClick={() => educationToast.assignment.quizResult({ quizName: "중간 테스트", score: 85, total: 100 })}>퀴즈 결과</Button>
              <Button variant="outline" onClick={() => educationToast.certificate.earned({ certificateName: "풀스택 과정" })}>수료증 발급</Button>
            </div>
          </SubSection>
          <SubSection title="헬스케어">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => healthcareToast.appointment.confirmed({ doctor: "김의사", date: "2024-03-15 14:00" })}>예약 확인</Button>
              <Button variant="outline" onClick={() => healthcareToast.prescription.medicationReminder({ medicineName: "타이레놀 500mg" })}>복용 알림</Button>
              <Button variant="outline" onClick={() => healthcareToast.healthRecord.abnormalDetected({ metric: "혈압", value: "160/95" })}>이상 수치</Button>
            </div>
          </SubSection>
          <SubSection title="음식 배달">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => foodDeliveryToast.order.accepted({ storeName: "맘스터치", estimatedTime: "35분" })}>주문 승인</Button>
              <Button variant="outline" onClick={() => foodDeliveryToast.delivery.onTheWay({ estimatedMinutes: 15 })}>배달 중</Button>
              <Button variant="outline" onClick={() => foodDeliveryToast.delivery.completed()}>배달 완료</Button>
            </div>
          </SubSection>
          <SubSection title="CRM / 영업">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => crmToast.deal.won({ dealName: "엔터프라이즈 계약", amount: "5,000만원" })}>거래 성사</Button>
              <Button variant="outline" onClick={() => crmToast.activity.followUpReminder({ contactName: "박대표", task: "제안서 발송" })}>후속 조치</Button>
              <Button variant="outline" onClick={() => crmToast.report.goalProgress({ goal: "Q1 매출 목표", progress: 78 })}>목표 달성률</Button>
            </div>
          </SubSection>
          <SubSection title="콘텐츠 / 미디어">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => contentToast.upload.progress({ fileName: "video-final.mp4", progress: 65 })}>업로드 진행</Button>
              <Button variant="outline" onClick={() => contentToast.management.published({ title: "Next.js 15 새 기능" })}>콘텐츠 게시</Button>
              <Button variant="outline" onClick={() => contentToast.monetization.donationReceived({ donor: "팬123", amount: "10,000원" })}>후원 받음</Button>
            </div>
          </SubSection>
        </Section>
      </div>
    </TooltipProvider>
  )
}
