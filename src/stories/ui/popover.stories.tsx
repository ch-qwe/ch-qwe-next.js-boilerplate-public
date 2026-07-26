import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Popover> = {
  title: "ui/Popover",
  component: Popover,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-2">
            <label className="text-xs" htmlFor="popover-width">
              Width
            </label>
            <input
              id="popover-width"
              defaultValue="100%"
              className="col-span-2 h-7 rounded-none border border-border bg-background px-2 text-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring/50"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <label className="text-xs" htmlFor="popover-max-width">
              Max. width
            </label>
            <input
              id="popover-max-width"
              defaultValue="300px"
              className="col-span-2 h-7 rounded-none border border-border bg-background px-2 text-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring/50"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <label className="text-xs" htmlFor="popover-height">
              Height
            </label>
            <input
              id="popover-height"
              defaultValue="25px"
              className="col-span-2 h-7 rounded-none border border-border bg-background px-2 text-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring/50"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithSideTop: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Above
      </PopoverTrigger>
      <PopoverContent side="top">
        <PopoverHeader>
          <PopoverTitle>Quick Info</PopoverTitle>
          <PopoverDescription>
            This popover appears above the trigger element.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const WithSideRight: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Right
      </PopoverTrigger>
      <PopoverContent side="right">
        <PopoverHeader>
          <PopoverTitle>Quick Info</PopoverTitle>
          <PopoverDescription>
            This popover appears to the right of the trigger element.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const ContentOnly: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-xs/relaxed text-muted-foreground">
          Simple popover without a header. Use this for concise contextual
          information that does not need a title.
        </p>
      </PopoverContent>
    </Popover>
  ),
}
