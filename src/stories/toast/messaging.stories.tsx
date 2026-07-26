import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { messagingToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Messaging",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const MessageReceived: Story = {
  name: "메시지 - 새 메시지",
  render: () => <Button variant="outline" onClick={() => messagingToast.message.received({ sender: "김영희", preview: "회의 시간 변경되었어요" })}>새 메시지</Button>,
}

export const MessageFailed: Story = {
  name: "메시지 - 전송 실패",
  render: () => <Button variant="outline" onClick={() => messagingToast.message.failed()}>전송 실패</Button>,
}

export const CallConnecting: Story = {
  name: "통화 - 연결 중",
  render: () => <Button variant="outline" onClick={() => messagingToast.call.connecting({ callee: "박철수" })}>통화 연결</Button>,
}

export const CallMissed: Story = {
  name: "통화 - 부재중",
  render: () => <Button variant="outline" onClick={() => messagingToast.call.missed({ caller: "이수진" })}>부재중 전화</Button>,
}

export const ChannelCreated: Story = {
  name: "채널 - 채널 생성",
  render: () => <Button variant="outline" onClick={() => messagingToast.channel.created({ channelName: "#general" })}>채널 생성</Button>,
}

export const AnnouncementPosted: Story = {
  name: "채널 - 공지 등록",
  render: () => <Button variant="outline" onClick={() => messagingToast.channel.announcementPosted({ channelName: "#공지사항" })}>공지 등록</Button>,
}

export const FileSizeExceeded: Story = {
  name: "파일 - 용량 초과",
  render: () => <Button variant="outline" onClick={() => messagingToast.file.sizeExceeded()}>용량 초과</Button>,
}

export const Connected: Story = {
  name: "상태 - 연결됨",
  render: () => <Button variant="outline" onClick={() => messagingToast.status.connected()}>연결됨</Button>,
}

export const Disconnected: Story = {
  name: "상태 - 연결 끊김",
  render: () => <Button variant="outline" onClick={() => messagingToast.status.disconnected()}>연결 끊김</Button>,
}

export const BotAdded: Story = {
  name: "봇 - 봇 추가",
  render: () => <Button variant="outline" onClick={() => messagingToast.bot.added({ botName: "Jira Bot" })}>봇 추가</Button>,
}
