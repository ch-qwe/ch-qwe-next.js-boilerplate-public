import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = {
  title: "ui/Field",
  component: Field,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <FieldLabel htmlFor="email">이메일</FieldLabel>
        <Input id="email" type="email" placeholder="name@example.com" />
        <FieldDescription>업무용 이메일을 입력해주세요.</FieldDescription>
      </Field>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <Field data-invalid="true">
        <FieldLabel htmlFor="username">사용자명</FieldLabel>
        <Input
          id="username"
          placeholder="사용자명 입력"
          aria-invalid="true"
        />
        <FieldError>이미 사용 중인 사용자명입니다.</FieldError>
      </Field>
    </div>
  ),
}

export const WithMultipleErrors: Story = {
  render: () => (
    <div className="w-80">
      <Field data-invalid="true">
        <FieldLabel htmlFor="password">비밀번호</FieldLabel>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          aria-invalid="true"
        />
        <FieldError
          errors={[
            { message: "최소 8자 이상이어야 합니다." },
            { message: "대문자를 포함해야 합니다." },
            { message: "특수문자를 포함해야 합니다." },
          ]}
        />
      </Field>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <FieldLabel htmlFor="bio">소개</FieldLabel>
        <FieldContent>
          <FieldTitle>자기소개를 작성해주세요</FieldTitle>
          <FieldDescription>최대 200자까지 입력할 수 있습니다.</FieldDescription>
        </FieldContent>
        <Input id="bio" placeholder="자기소개 입력" />
      </Field>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-96">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="h-name">이름</FieldLabel>
        <Input id="h-name" placeholder="이름 입력" />
      </Field>
    </div>
  ),
}

export const GroupOfFields: Story = {
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="g-name">이름</FieldLabel>
          <Input id="g-name" placeholder="이름 입력" />
        </Field>
        <Field>
          <FieldLabel htmlFor="g-email">이메일</FieldLabel>
          <Input id="g-email" type="email" placeholder="name@example.com" />
          <FieldDescription>인증 이메일이 발송됩니다.</FieldDescription>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="g-phone">전화번호</FieldLabel>
          <Input id="g-phone" type="tel" placeholder="010-0000-0000" aria-invalid="true" />
          <FieldError>올바른 전화번호 형식이 아닙니다.</FieldError>
        </Field>
      </FieldGroup>
    </div>
  ),
}
