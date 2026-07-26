import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "ui/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 4, step: 0.01 },
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const SixteenByNine: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} className="overflow-hidden rounded-none bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="16:9 비율 이미지"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args} className="overflow-hidden rounded-none bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="1:1 비율 이미지"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const FourByThree: Story = {
  args: { ratio: 4 / 3 },
  render: (args) => (
    <div className="w-72">
      <AspectRatio {...args} className="overflow-hidden rounded-none bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="4:3 비율 이미지"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithPlaceholder: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <div className="w-80">
      <AspectRatio
        {...args}
        className="overflow-hidden rounded-none bg-muted flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="w-12 h-12 rounded-none bg-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xs">16 : 9</span>
        </div>
      </AspectRatio>
    </div>
  ),
}
