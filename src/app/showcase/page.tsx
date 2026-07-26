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
