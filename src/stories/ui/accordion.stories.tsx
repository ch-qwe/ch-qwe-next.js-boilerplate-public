import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const meta: Meta<typeof Accordion> = {
  title: "ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          shadcn/ui is a collection of reusable components built with Radix UI
          and Tailwind CSS. You can copy and paste these components into your
          apps.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML
          elements to ensure accessibility for all users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it in my project?</AccordionTrigger>
        <AccordionContent>
          Absolutely. The components are open source and free to use in both
          personal and commercial projects without any restrictions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  render: () => (
    <Accordion className="w-80" multiple>
      <AccordionItem value="item-1">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          This accordion allows multiple items to be open at once. Try opening
          all three panels simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Both this and other items can remain open while you explore different
          sections of the accordion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third item</AccordionTrigger>
        <AccordionContent>
          The openMultiple prop is passed to the Accordion root to enable this
          behavior.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Accordion className="w-80" defaultValue={["item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Closed by default</AccordionTrigger>
        <AccordionContent>This item starts collapsed.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Open by default</AccordionTrigger>
        <AccordionContent>
          This item is open on initial render via the defaultValue prop on the
          Accordion root.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Also closed by default</AccordionTrigger>
        <AccordionContent>This item also starts collapsed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
