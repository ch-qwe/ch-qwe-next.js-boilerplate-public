import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  FavouriteIcon,
  ThumbsUpIcon,
  Comment01Icon,
  Share01Icon,
  UserAdd01Icon,
  UserGroupIcon,
  Image01Icon,
  Video01Icon,
  Camera01Icon,
  Flag01Icon,
  Bookmark01Icon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const socialToast = {
  // 상호작용
  interaction: {
    liked: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 좋아요를 눌렀습니다`, status: "info", icon: FavouriteIcon, ...o }),
    commented: (data: { userName: string; preview: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 댓글을 남겼습니다`, description: data.preview, status: "info", icon: Comment01Icon, actions: [{ label: "답글 달기", onClick: () => {} }], ...o }),
    replied: (data: { userName: string; preview: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 대댓글을 남겼습니다`, description: data.preview, status: "info", icon: Comment01Icon, ...o }),
    mentioned: (data: { userName: string; context: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 멘션했습니다`, description: data.context, status: "info", icon: Comment01Icon, actions: [{ label: "보기", onClick: () => {} }], ...o }),
    shared: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 공유했습니다`, status: "info", icon: Share01Icon, ...o }),
    reposted: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 리포스트했습니다`, status: "info", icon: Share01Icon, ...o }),
    bookmarked: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "북마크에 저장되었습니다", status: "success", icon: Bookmark01Icon, ...o }),
  },

  // 팔로우
  follow: {
    newFollower: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 팔로우했습니다`, status: "info", icon: UserAdd01Icon, actions: [{ label: "프로필 보기", onClick: () => {} }], ...o }),
    requestReceived: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님의 팔로우 요청`, status: "info", icon: UserAdd01Icon, actions: [{ label: "수락", onClick: () => {} }, { label: "거절", onClick: () => {} }], ...o }),
    requestAccepted: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 팔로우 요청을 수락했습니다`, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: UserAdd01Icon, ...o }),
    unfollowed: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님을 언팔로우했습니다`, status: "info", icon: UserAdd01Icon, ...o }),
  },

  // 게시물
  post: {
    published: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "게시물이 작성되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    deleted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "게시물이 삭제되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
    edited: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "게시물이 수정되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    reported: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "게시물이 신고되었습니다", description: "검토 후 처리됩니다", status: "info", icon: Flag01Icon, ...o }),
    drafted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "임시저장되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
    scheduled: (data: { date: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "예약 발행이 설정되었습니다", description: data.date, status: "success", icon: CheckmarkCircle02Icon, ...o }),
  },

  // 미디어
  media: {
    imageUploaded: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "이미지가 업로드되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Image01Icon, ...o }),
    videoUploading: (data: { progress: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "동영상 업로드 중", status: "loading", icon: Loading03Icon, categoryIcon: Video01Icon, progress: { value: data.progress, showPercentage: true }, ...o }),
    videoEncodingComplete: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "동영상 인코딩이 완료되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Video01Icon, ...o }),
    uploadFailed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "업로드에 실패했습니다", description: "다시 시도해주세요", status: "error", icon: MultiplicationSignCircleIcon, actions: [{ label: "다시 시도", onClick: () => {} }], ...o }),
    storyPublished: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "스토리가 게시되었습니다", status: "success", icon: Camera01Icon, ...o }),
    storyExpired: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "스토리가 만료되었습니다", status: "info", icon: Camera01Icon, ...o }),
  },

  // 커뮤니티
  community: {
    joined: (data: { groupName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "그룹에 가입했습니다", description: data.groupName, status: "success", icon: UserGroupIcon, ...o }),
    invited: (data: { groupName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "그룹 초대를 받았습니다", description: data.groupName, status: "info", icon: UserGroupIcon, actions: [{ label: "수락", onClick: () => {} }], ...o }),
    left: (data: { groupName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "그룹에서 탈퇴했습니다", description: data.groupName, status: "info", icon: UserGroupIcon, ...o }),
    adminGranted: (data: { groupName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "관리자 권한이 부여되었습니다", description: data.groupName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: UserGroupIcon, ...o }),
    postPinned: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "게시물이 고정되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
  },

  // 계정
  account: {
    profileUpdated: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "프로필이 업데이트되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    privateModeOn: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: "계정이 비공개로 전환되었습니다", status: "info", icon: InformationCircleIcon, ...o }),
    blocked: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님을 차단했습니다`, status: "info", icon: InformationCircleIcon, ...o }),
    unblocked: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님을 차단 해제했습니다`, status: "info", icon: InformationCircleIcon, ...o }),
    muted: (data: { userName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "social", title: `${data.userName}님이 음소거되었습니다`, status: "info", icon: InformationCircleIcon, ...o }),
  },
}
