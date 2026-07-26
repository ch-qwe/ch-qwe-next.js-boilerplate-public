import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { educationToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Education",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const CourseCompleted: Story = {
  name: "강의 - 강의 완료",
  render: () => <Button variant="outline" onClick={() => educationToast.course.completed({ courseName: "React 마스터 클래스" })}>강의 완료</Button>,
}

export const NextUnlocked: Story = {
  name: "강의 - 다음 강의 해금",
  render: () => <Button variant="outline" onClick={() => educationToast.course.nextUnlocked({ lessonName: "Chapter 5: Hooks 심화" })}>다음 강의 해금</Button>,
}

export const ProgressUpdated: Story = {
  name: "강의 - 진도율 업데이트",
  render: () => <Button variant="outline" onClick={() => educationToast.course.progressUpdated({ courseName: "TypeScript 기초", progress: 65 })}>진도율 업데이트</Button>,
}

export const AssignmentSubmitted: Story = {
  name: "과제 - 과제 제출",
  render: () => <Button variant="outline" onClick={() => educationToast.assignment.submitted({ assignmentName: "Week 3 과제" })}>과제 제출</Button>,
}

export const QuizResult: Story = {
  name: "과제 - 퀴즈 결과",
  render: () => <Button variant="outline" onClick={() => educationToast.assignment.quizResult({ quizName: "중간 테스트", score: 85, total: 100 })}>퀴즈 결과</Button>,
}

export const Passed: Story = {
  name: "과제 - 합격",
  render: () => <Button variant="outline" onClick={() => educationToast.assignment.passed({ examName: "최종 시험" })}>합격</Button>,
}

export const CertificateEarned: Story = {
  name: "수료 - 수료증 발급",
  render: () => <Button variant="outline" onClick={() => educationToast.certificate.earned({ certificateName: "풀스택 개발자 과정" })}>수료증 발급</Button>,
}

export const BadgeEarned: Story = {
  name: "수료 - 배지 획득",
  render: () => <Button variant="outline" onClick={() => educationToast.certificate.badgeEarned({ badgeName: "7일 연속 학습" })}>배지 획득</Button>,
}

export const LevelUp: Story = {
  name: "수료 - 레벨 업",
  render: () => <Button variant="outline" onClick={() => educationToast.certificate.levelUp({ level: 15 })}>레벨 업</Button>,
}

export const LiveClassStarting: Story = {
  name: "소통 - 라이브 수업 시작",
  render: () => <Button variant="outline" onClick={() => educationToast.communication.liveClassStarting({ className: "실시간 코드 리뷰" })}>라이브 수업</Button>,
}
