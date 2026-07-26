"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  InformationCircleIcon,
  AlertCircleIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@hugeicons/core-free-icons"

export function ComponentPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ButtonShowcase />
      <FormCard />
      <BadgeShowcase />
      <CardExample />
      <DataDisplay />
      <TableShowcase />
      <TypographyShowcase />
      <AccordionShowcase />
      <ToggleShowcase />
    </div>
  )
}

function ButtonShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>Button variants and sizes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <Separator />
        <div className="flex flex-wrap items-center gap-1.5">
          <Button size="xs">XS</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function FormCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form</CardTitle>
        <CardDescription>Interactive form elements</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch id="notifications" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Plan</Label>
          <RadioGroup defaultValue="free">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="free" />
              <Label>Free</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="pro" />
              <Label>Pro</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  )
}

function BadgeShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badges & Alerts</CardTitle>
        <CardDescription>Status indicators and notifications</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <Separator />
        <Alert>
          <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert message.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}

function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Manage your team and roles</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {[
          { name: "Kim", role: "Owner", initials: "KM" },
          { name: "Lee", role: "Developer", initials: "LE" },
          { name: "Park", role: "Designer", initials: "PK" },
        ].map((member) => (
          <div key={member.name} className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-xs font-medium">{member.name}</div>
              <div className="text-[0.625rem] text-muted-foreground">
                {member.role}
              </div>
            </div>
            <Badge variant="outline">{member.role}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function DataDisplay() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data</CardTitle>
        <CardDescription>Progress, sliders, and tabs</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs">
            <span>Storage</span>
            <span className="text-muted-foreground">75%</span>
          </div>
          <Progress value={75} />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs">
            <span>Volume</span>
          </div>
          <Slider defaultValue={[40]} max={100} step={1} />
        </div>
        <Separator />
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-2">
            <p className="text-muted-foreground">
              Dashboard overview content.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="pt-2">
            <p className="text-muted-foreground">Analytics data here.</p>
          </TabsContent>
          <TabsContent value="reports" className="pt-2">
            <p className="text-muted-foreground">Reports content.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function TableShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table</CardTitle>
        <CardDescription>Data table example</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Project Alpha", status: "Active", amount: "₩250,000" },
              { name: "Project Beta", status: "Pending", amount: "₩150,000" },
              { name: "Project Gamma", status: "Completed", amount: "₩350,000" },
            ].map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === "Active"
                        ? "default"
                        : row.status === "Pending"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function TypographyShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography</CardTitle>
        <CardDescription>Font weights, sizes, and Korean text</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-lg font-bold">Bold Heading (700)</p>
        <p className="text-base font-semibold">Semibold Text (600)</p>
        <p className="text-sm font-medium">Medium Text (500)</p>
        <p className="text-sm font-normal">Regular Text (400)</p>
        <p className="text-xs text-muted-foreground">
          Small Muted Text (400)
        </p>
        <Separator />
        <p className="text-sm font-bold">
          다람쥐 헌 쳇바퀴에 타고파 (700)
        </p>
        <p className="text-sm font-medium">
          빠른 갈색 여우가 게으른 개를 뛰어넘었습니다. (500)
        </p>
        <p className="text-xs font-normal text-muted-foreground">
          가나다라마바사아자차카타파하 — 0123456789 (400)
        </p>
        <Separator />
        <p className="font-mono text-xs">Monospace: 0123456789</p>
        <p className="text-xs tabular-nums">Tabular Nums: 1,234,567.89</p>
      </CardContent>
    </Card>
  )
}

function AccordionShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accordion</CardTitle>
        <CardDescription>Collapsible content sections</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this boilerplate?</AccordionTrigger>
            <AccordionContent>
              A Next.js 16 + shadcn base-mira boilerplate with 55 pre-built UI
              components, Storybook, and Tailwind CSS v4.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to customize the theme?</AccordionTrigger>
            <AccordionContent>
              Modify the CSS variables in globals.css or use the sidebar controls
              on this page to preview different configurations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How to add new components?</AccordionTrigger>
            <AccordionContent>
              Use the shadcn CLI: pnpm dlx shadcn@latest add [component-name]
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

function ToggleShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Toggle</CardTitle>
        <CardDescription>Toggle buttons and groups</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-1.5">
          <Toggle variant="outline" aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
          <Toggle variant="outline" aria-label="Italic">
            <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
          </Toggle>
          <Toggle variant="outline" aria-label="Underline">
            <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
          </Toggle>
        </div>
        <Separator />
        <ToggleGroup variant="outline" defaultValue={["left"]}>
          <ToggleGroupItem value="left" aria-label="Left">
            <HugeiconsIcon icon={TextAlignLeftIcon} strokeWidth={2} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <HugeiconsIcon icon={TextAlignCenterIcon} strokeWidth={2} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <HugeiconsIcon icon={TextAlignRightIcon} strokeWidth={2} />
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  )
}
