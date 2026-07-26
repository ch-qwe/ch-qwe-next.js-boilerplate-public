import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta: Meta<typeof ToggleGroup> = {
  title: "ui/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup multiple defaultValue={["bold"] as readonly string[]}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <strong>B</strong>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <em>I</em>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup multiple variant="outline">
      <ToggleGroupItem value="left" aria-label="Align left">
        ←
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        ↔
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        →
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        ≡
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Single: Story = {
  render: () => (
    <ToggleGroup defaultValue={["month"] as readonly string[]}>
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const OutlineSingle: Story = {
  render: () => (
    <ToggleGroup variant="outline" defaultValue={["grid"] as readonly string[]}>
      <ToggleGroupItem value="list" aria-label="List view">
        ☰
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        ⊞
      </ToggleGroupItem>
      <ToggleGroupItem value="columns" aria-label="Columns view">
        ⊟
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Small: Story = {
  render: () => (
    <ToggleGroup size="sm" defaultValue={["b"] as readonly string[]}>
      <ToggleGroupItem value="a">Option A</ToggleGroupItem>
      <ToggleGroupItem value="b">Option B</ToggleGroupItem>
      <ToggleGroupItem value="c">Option C</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Spaced: Story = {
  render: () => (
    <ToggleGroup multiple spacing={2}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="strikethrough">Strikethrough</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ToggleGroup
      orientation="vertical"
      defaultValue={["option1"] as readonly string[]}
      spacing={1}
    >
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
  ),
}
