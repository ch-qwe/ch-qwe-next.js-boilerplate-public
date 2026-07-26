import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from "@/components/ui/combobox"

const meta = {
  title: "ui/Combobox",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "Gatsby",
]

export const Default: Story = {
  render: () => (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="프레임워크 검색..." showTrigger showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>
              {fw}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

const groupItems = [
  "react",
  "vue",
  "svelte",
  "nodejs",
  "django",
  "rails",
  "react-native",
  "flutter",
]

export const WithGroups: Story = {
  render: () => (
    <Combobox items={groupItems}>
      <ComboboxInput placeholder="언어 검색..." showTrigger showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>프론트엔드</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>백엔드</ComboboxLabel>
            <ComboboxItem value="nodejs">Node.js</ComboboxItem>
            <ComboboxItem value="django">Django</ComboboxItem>
            <ComboboxItem value="rails">Ruby on Rails</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>모바일</ComboboxLabel>
            <ComboboxItem value="react-native">React Native</ComboboxItem>
            <ComboboxItem value="flutter">Flutter</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Combobox defaultValue="Next.js" items={frameworks}>
      <ComboboxInput placeholder="프레임워크 검색..." showTrigger showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>결과가 없습니다.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>
              {fw}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

const cities = ["seoul", "busan", "incheon", "daegu", "gwangju"]

export const WithoutTrigger: Story = {
  render: () => (
    <Combobox items={cities}>
      <ComboboxInput placeholder="도시 검색..." showTrigger={false} showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>도시를 찾을 수 없습니다.</ComboboxEmpty>
          <ComboboxItem value="seoul">서울</ComboboxItem>
          <ComboboxItem value="busan">부산</ComboboxItem>
          <ComboboxItem value="incheon">인천</ComboboxItem>
          <ComboboxItem value="daegu">대구</ComboboxItem>
          <ComboboxItem value="gwangju">광주</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
