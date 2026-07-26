import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { crmToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/CRM",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const LeadCreated: Story = {
  name: "리드 - 새 리드 등록",
  render: () => <Button variant="outline" onClick={() => crmToast.lead.created({ leadName: "(주)테크스타트" })}>리드 등록</Button>,
}

export const LeadAssigned: Story = {
  name: "리드 - 리드 배정",
  render: () => <Button variant="outline" onClick={() => crmToast.lead.assigned({ leadName: "(주)테크스타트", assignee: "김영업" })}>리드 배정</Button>,
}

export const DuplicateDetected: Story = {
  name: "리드 - 중복 감지",
  render: () => <Button variant="outline" onClick={() => crmToast.lead.duplicateDetected({ customerName: "이중복" })}>중복 감지</Button>,
}

export const DealWon: Story = {
  name: "거래 - 거래 성사",
  render: () => <Button variant="outline" onClick={() => crmToast.deal.won({ dealName: "엔터프라이즈 계약", amount: "5,000만원" })}>거래 성사</Button>,
}

export const DealLost: Story = {
  name: "거래 - 거래 실패",
  render: () => <Button variant="outline" onClick={() => crmToast.deal.lost({ dealName: "SMB 계약", reason: "예산 부족" })}>거래 실패</Button>,
}

export const DealStageMoved: Story = {
  name: "거래 - 단계 이동",
  render: () => <Button variant="outline" onClick={() => crmToast.deal.stageMoved({ dealName: "엔터프라이즈 계약", stage: "계약 협상" })}>단계 이동</Button>,
}

export const FollowUpReminder: Story = {
  name: "활동 - 후속 조치 리마인더",
  render: () => <Button variant="outline" onClick={() => crmToast.activity.followUpReminder({ contactName: "박대표", task: "제안서 발송" })}>후속 조치</Button>,
}

export const ReportGenerated: Story = {
  name: "보고서 - 보고서 생성",
  render: () => <Button variant="outline" onClick={() => crmToast.report.generated({ reportName: "월간 매출 보고서" })}>보고서 생성</Button>,
}

export const GoalProgress: Story = {
  name: "보고서 - 목표 달성률",
  render: () => <Button variant="outline" onClick={() => crmToast.report.goalProgress({ goal: "Q1 매출 목표", progress: 78 })}>목표 달성률</Button>,
}

export const AutomationError: Story = {
  name: "자동화 - 오류 발생",
  render: () => <Button variant="outline" onClick={() => crmToast.automation.automationError({ workflowName: "리드 자동 배정", error: "담당자 미지정" })}>자동화 오류</Button>,
}

export const DataImported: Story = {
  name: "연동 - 데이터 가져오기",
  render: () => <Button variant="outline" onClick={() => crmToast.integration.dataImported({ source: "Salesforce", count: 1250 })}>데이터 가져오기</Button>,
}
