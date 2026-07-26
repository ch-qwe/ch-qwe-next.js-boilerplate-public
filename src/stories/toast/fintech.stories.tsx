import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { fintechToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Fintech",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const TransferSent: Story = {
  name: "송금 - 송금 완료",
  render: () => <Button variant="outline" onClick={() => fintechToast.transfer.sent({ amount: "50,000원", recipient: "김영희" })}>송금 완료</Button>,
}

export const TransferFailed: Story = {
  name: "송금 - 송금 실패",
  render: () => <Button variant="outline" onClick={() => fintechToast.transfer.failed({ reason: "수취인 계좌 확인 불가" })}>송금 실패</Button>,
}

export const PaymentApproved: Story = {
  name: "결제 - 결제 승인",
  render: () => <Button variant="outline" onClick={() => fintechToast.payment.approved({ amount: "32,000원", merchant: "스타벅스 강남점" })}>결제 승인</Button>,
}

export const InsufficientBalance: Story = {
  name: "계좌 - 잔액 부족",
  render: () => <Button variant="outline" onClick={() => fintechToast.account.insufficientBalance()}>잔액 부족</Button>,
}

export const NewDeviceLogin: Story = {
  name: "보안 - 새 기기 로그인",
  render: () => <Button variant="outline" onClick={() => fintechToast.security.newDeviceLogin({ device: "iPhone 15 Pro (서울)" })}>새 기기 감지</Button>,
}

export const SuspiciousActivity: Story = {
  name: "보안 - 의심 거래 감지",
  render: () => <Button variant="outline" onClick={() => fintechToast.security.suspiciousActivity({ detail: "해외 결제 시도: $2,500" })}>의심 거래</Button>,
}

export const BuyExecuted: Story = {
  name: "투자 - 매수 체결",
  render: () => <Button variant="outline" onClick={() => fintechToast.investment.buyExecuted({ stock: "삼성전자", amount: "100주" })}>매수 체결</Button>,
}

export const TargetReached: Story = {
  name: "투자 - 목표가 도달",
  render: () => <Button variant="outline" onClick={() => fintechToast.investment.targetReached({ stock: "AAPL", price: "$195.00" })}>목표가 도달</Button>,
}

export const LoanApproved: Story = {
  name: "대출 - 대출 승인",
  render: () => <Button variant="outline" onClick={() => fintechToast.loan.approved({ amount: "3,000만원" })}>대출 승인</Button>,
}

export const TwoFactorEnabled: Story = {
  name: "보안 - 2단계 인증",
  render: () => <Button variant="outline" onClick={() => fintechToast.security.twoFactorEnabled()}>2단계 인증</Button>,
}
