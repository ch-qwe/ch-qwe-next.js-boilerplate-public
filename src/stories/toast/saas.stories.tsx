import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { saasToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/SaaS",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const TaskCreated: Story = {
  name: "작업 - 작업 생성",
  render: () => <Button variant="outline" onClick={() => saasToast.task.created({ taskName: "API 엔드포인트 구현" })}>작업 생성</Button>,
}

export const TaskCompleted: Story = {
  name: "작업 - 작업 완료",
  render: () => <Button variant="outline" onClick={() => saasToast.task.completed({ taskName: "UI 리뷰" })}>작업 완료</Button>,
}

export const TaskOverdue: Story = {
  name: "작업 - 마감일 초과",
  render: () => <Button variant="outline" onClick={() => saasToast.task.overdue({ taskName: "보안 감사 리포트" })}>마감일 초과</Button>,
}

export const TeamInvited: Story = {
  name: "팀 - 초대 전송",
  render: () => <Button variant="outline" onClick={() => saasToast.team.invited({ email: "dev@example.com" })}>팀원 초대</Button>,
}

export const TeamJoined: Story = {
  name: "팀 - 새 멤버 참여",
  render: () => <Button variant="outline" onClick={() => saasToast.team.joined({ memberName: "김철수" })}>멤버 참여</Button>,
}

export const ProjectCreated: Story = {
  name: "프로젝트 - 프로젝트 생성",
  render: () => <Button variant="outline" onClick={() => saasToast.project.created({ projectName: "Dashboard v2" })}>프로젝트 생성</Button>,
}

export const DocumentConflict: Story = {
  name: "문서 - 동시 편집 충돌",
  render: () => <Button variant="outline" onClick={() => saasToast.document.conflictDetected()}>편집 충돌</Button>,
}

export const LinkCopied: Story = {
  name: "문서 - 링크 복사",
  render: () => <Button variant="outline" onClick={() => saasToast.document.linkCopied()}>링크 복사</Button>,
}

export const ApiKeyCreated: Story = {
  name: "연동 - API 키 생성",
  render: () => <Button variant="outline" onClick={() => saasToast.integration.apiKeyCreated()}>API 키 생성</Button>,
}

export const TrialExpiring: Story = {
  name: "구독 - 체험 종료 임박",
  render: () => <Button variant="outline" onClick={() => saasToast.subscription.trialExpiring({ daysLeft: 3 })}>체험 종료</Button>,
}

export const PlanUpgraded: Story = {
  name: "구독 - 플랜 업그레이드",
  render: () => <Button variant="outline" onClick={() => saasToast.subscription.upgraded({ plan: "Pro" })}>플랜 업그레이드</Button>,
}
