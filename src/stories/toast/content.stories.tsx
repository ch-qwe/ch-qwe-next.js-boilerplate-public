import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { contentToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Content",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const UploadProgress: Story = {
  name: "업로드 - 업로드 진행",
  render: () => <Button variant="outline" onClick={() => contentToast.upload.progress({ fileName: "video-final.mp4", progress: 65 })}>업로드 진행</Button>,
}

export const UploadCompleted: Story = {
  name: "업로드 - 업로드 완료",
  render: () => <Button variant="outline" onClick={() => contentToast.upload.completed({ fileName: "thumbnail.png" })}>업로드 완료</Button>,
}

export const UploadFailed: Story = {
  name: "업로드 - 업로드 실패",
  render: () => <Button variant="outline" onClick={() => contentToast.upload.failed({ fileName: "large-video.mov" })}>업로드 실패</Button>,
}

export const SizeExceeded: Story = {
  name: "업로드 - 용량 초과",
  render: () => <Button variant="outline" onClick={() => contentToast.upload.sizeExceeded({ maxSize: "2GB" })}>용량 초과</Button>,
}

export const ContentPublished: Story = {
  name: "콘텐츠 - 게시",
  render: () => <Button variant="outline" onClick={() => contentToast.management.published({ title: "Next.js 15 새로운 기능 총정리" })}>콘텐츠 게시</Button>,
}

export const ContentScheduled: Story = {
  name: "콘텐츠 - 예약 발행",
  render: () => <Button variant="outline" onClick={() => contentToast.management.scheduled({ title: "주간 뉴스레터", date: "2024-03-20 09:00" })}>예약 발행</Button>,
}

export const Subscribed: Story = {
  name: "구독 - 구독 완료",
  render: () => <Button variant="outline" onClick={() => contentToast.subscription.subscribed({ channelName: "코딩 채널" })}>구독 완료</Button>,
}

export const NewContentPublished: Story = {
  name: "구독 - 새 콘텐츠 발행",
  render: () => <Button variant="outline" onClick={() => contentToast.subscription.newContentPublished({ creator: "개발자 김씨", title: "TailwindCSS v4 마이그레이션 가이드" })}>새 콘텐츠</Button>,
}

export const DonationReceived: Story = {
  name: "수익화 - 후원 받음",
  render: () => <Button variant="outline" onClick={() => contentToast.monetization.donationReceived({ donor: "팬123", amount: "10,000원" })}>후원 받음</Button>,
}

export const DownloadCompleted: Story = {
  name: "다운로드 - 다운로드 완료",
  render: () => <Button variant="outline" onClick={() => contentToast.download.completed({ fileName: "podcast-ep42.mp3" })}>다운로드 완료</Button>,
}

export const CopyrightWarning: Story = {
  name: "커뮤니티 - 저작권 경고",
  render: () => <Button variant="outline" onClick={() => contentToast.community.copyrightWarning({ contentTitle: "배경 음악 사용 영상" })}>저작권 경고</Button>,
}
