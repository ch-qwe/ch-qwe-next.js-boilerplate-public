import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "@/components/ui/button"
import { socialToast } from "@/components/toast"

const meta: Meta = {
  title: "toast/Social",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Liked: Story = {
  name: "상호작용 - 좋아요",
  render: () => <Button variant="outline" onClick={() => socialToast.interaction.liked({ userName: "김민수" })}>좋아요 알림</Button>,
}

export const Commented: Story = {
  name: "상호작용 - 댓글",
  render: () => <Button variant="outline" onClick={() => socialToast.interaction.commented({ userName: "이수진", preview: "정말 좋은 글이네요!" })}>댓글 알림</Button>,
}

export const Mentioned: Story = {
  name: "상호작용 - 멘션",
  render: () => <Button variant="outline" onClick={() => socialToast.interaction.mentioned({ userName: "박지훈", context: "프로젝트 회의 관련 게시물에서" })}>멘션 알림</Button>,
}

export const NewFollower: Story = {
  name: "팔로우 - 새 팔로워",
  render: () => <Button variant="outline" onClick={() => socialToast.follow.newFollower({ userName: "최유진" })}>새 팔로워</Button>,
}

export const FollowRequest: Story = {
  name: "팔로우 - 팔로우 요청",
  render: () => <Button variant="outline" onClick={() => socialToast.follow.requestReceived({ userName: "홍길동" })}>팔로우 요청</Button>,
}

export const PostPublished: Story = {
  name: "게시물 - 작성 완료",
  render: () => <Button variant="outline" onClick={() => socialToast.post.published()}>게시물 작성</Button>,
}

export const PostReported: Story = {
  name: "게시물 - 신고",
  render: () => <Button variant="outline" onClick={() => socialToast.post.reported()}>게시물 신고</Button>,
}

export const VideoUploading: Story = {
  name: "미디어 - 동영상 업로드",
  render: () => <Button variant="outline" onClick={() => socialToast.media.videoUploading({ progress: 45 })}>동영상 업로드</Button>,
}

export const GroupJoined: Story = {
  name: "커뮤니티 - 그룹 가입",
  render: () => <Button variant="outline" onClick={() => socialToast.community.joined({ groupName: "React 개발자 모임" })}>그룹 가입</Button>,
}

export const Blocked: Story = {
  name: "계정 - 차단",
  render: () => <Button variant="outline" onClick={() => socialToast.account.blocked({ userName: "스팸계정" })}>사용자 차단</Button>,
}
