import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { healthcareToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Healthcare",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const AppointmentConfirmed: Story = {
  name: "예약 - 예약 확인",
  render: () => <Button variant="outline" onClick={() => healthcareToast.appointment.confirmed({ doctor: "김의사", date: "2024-03-15 14:00" })}>예약 확인</Button>,
}

export const AppointmentReminder: Story = {
  name: "예약 - 리마인더",
  render: () => <Button variant="outline" onClick={() => healthcareToast.appointment.reminder({ doctor: "박의사", date: "내일 오전 10:00" })}>예약 리마인더</Button>,
}

export const ConsultationStarted: Story = {
  name: "진료 - 진료 시작",
  render: () => <Button variant="outline" onClick={() => healthcareToast.consultation.started({ doctor: "이의사" })}>진료 시작</Button>,
}

export const PrescriptionIssued: Story = {
  name: "진료 - 처방전 발행",
  render: () => <Button variant="outline" onClick={() => healthcareToast.consultation.prescriptionIssued()}>처방전 발행</Button>,
}

export const TestResultReady: Story = {
  name: "진료 - 검사 결과 도착",
  render: () => <Button variant="outline" onClick={() => healthcareToast.consultation.testResultReady({ testName: "혈액 검사" })}>검사 결과</Button>,
}

export const MedicationReminder: Story = {
  name: "처방 - 약 복용 알림",
  render: () => <Button variant="outline" onClick={() => healthcareToast.prescription.medicationReminder({ medicineName: "타이레놀 500mg" })}>약 복용 알림</Button>,
}

export const PrescriptionReady: Story = {
  name: "처방 - 약 준비 완료",
  render: () => <Button variant="outline" onClick={() => healthcareToast.prescription.ready({ pharmacy: "건강약국 강남점" })}>약 준비 완료</Button>,
}

export const AbnormalDetected: Story = {
  name: "건강기록 - 이상 수치",
  render: () => <Button variant="outline" onClick={() => healthcareToast.healthRecord.abnormalDetected({ metric: "혈압", value: "160/95 mmHg" })}>이상 수치 감지</Button>,
}

export const GoalAchieved: Story = {
  name: "건강기록 - 목표 달성",
  render: () => <Button variant="outline" onClick={() => healthcareToast.healthRecord.goalAchieved({ goal: "일일 걸음 수 10,000보" })}>목표 달성</Button>,
}

export const PaymentCompleted: Story = {
  name: "보험/결제 - 결제 완료",
  render: () => <Button variant="outline" onClick={() => healthcareToast.insurance.paymentCompleted({ amount: "25,000원" })}>결제 완료</Button>,
}
