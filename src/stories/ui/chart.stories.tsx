import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const meta: Meta = {
  title: "ui/Chart",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const barChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

export const Default: Story = {
  render: () => (
    <ChartContainer config={barChartConfig} className="h-[300px] w-[500px]">
      <BarChart data={barData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const WithLegend: Story = {
  render: () => (
    <ChartContainer config={barChartConfig} className="h-[300px] w-[500px]">
      <BarChart data={barData}>
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
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const SingleSeries: Story = {
  render: () => {
    const singleConfig: ChartConfig = {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    }

    return (
      <ChartContainer config={singleConfig} className="h-[300px] w-[500px]">
        <BarChart data={barData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  },
}

export const WithThemeColors: Story = {
  render: () => {
    const themeConfig: ChartConfig = {
      desktop: {
        label: "Desktop",
        theme: {
          light: "#2563eb",
          dark: "#60a5fa",
        },
      },
      mobile: {
        label: "Mobile",
        theme: {
          light: "#16a34a",
          dark: "#4ade80",
        },
      },
    }

    return (
      <ChartContainer config={themeConfig} className="h-[300px] w-[500px]">
        <BarChart data={barData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  },
}
