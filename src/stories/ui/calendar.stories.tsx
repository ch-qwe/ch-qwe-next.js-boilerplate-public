import React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "ui/Calendar",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Calendar mode="single" />,
}

export const WithSelected: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(
      new Date()
    )

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    )
  },
}

export const WithDropdownCaption: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(
      new Date()
    )

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
      />
    )
  },
}

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<
      { from: Date | undefined; to?: Date | undefined } | undefined
    >(undefined)

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
      />
    )
  },
}
