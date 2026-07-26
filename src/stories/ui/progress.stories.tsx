import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const meta: Meta<typeof Progress> = {
  title: "ui/Progress",
  component: Progress,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={50} />
    </div>
  ),
}

export const Full: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={100} />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={0} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={65}>
        <ProgressLabel>Uploading files...</ProgressLabel>
        <ProgressValue>{(formatted) => formatted}</ProgressValue>
      </Progress>
    </div>
  ),
}

export const WithCustomValue: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={72}>
        <ProgressLabel>Storage used</ProgressLabel>
        <ProgressValue>{(_, value) => `${value} GB / 100 GB`}</ProgressValue>
      </Progress>
    </div>
  ),
}

export const MultipleValues: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Progress value={25}>
        <ProgressLabel>Design</ProgressLabel>
        <ProgressValue>{(formatted) => formatted}</ProgressValue>
      </Progress>
      <Progress value={60}>
        <ProgressLabel>Development</ProgressLabel>
        <ProgressValue>{(formatted) => formatted}</ProgressValue>
      </Progress>
      <Progress value={90}>
        <ProgressLabel>Testing</ProgressLabel>
        <ProgressValue>{(formatted) => formatted}</ProgressValue>
      </Progress>
      <Progress value={100}>
        <ProgressLabel>Deployment</ProgressLabel>
        <ProgressValue>{(formatted) => formatted}</ProgressValue>
      </Progress>
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={null}>
        <ProgressLabel>Loading...</ProgressLabel>
      </Progress>
    </div>
  ),
}

export const CustomComposition: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={40} />
    </div>
  ),
}
