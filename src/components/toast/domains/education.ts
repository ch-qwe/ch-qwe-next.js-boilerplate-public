import { showDomainToast } from "../domain-toast"
import type { DomainToastOverride } from "../domain-toast-types"
import {
  Book01Icon,
  GraduationScrollIcon,
  Certificate01Icon,
  Quiz01Icon,
  PencilIcon,
  Award01Icon,
  Target01Icon,
  Brain01Icon,
  Calendar01Icon,
  CreditCardIcon,
} from "@hugeicons/core-free-icons"
import {
  CheckmarkCircle02Icon,
  MultiplicationSignCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"

export const educationToast = {
  // 강의
  course: {
    started: (data: { courseName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "강의가 시작되었습니다", description: data.courseName, status: "info", icon: Book01Icon, ...o }),
    completed: (data: { courseName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "강의를 완료했습니다!", description: data.courseName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Book01Icon, ...o }),
    nextUnlocked: (data: { lessonName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "다음 강의가 해금되었습니다", description: data.lessonName, status: "success", icon: Book01Icon, actions: [{ label: "바로 수강", onClick: () => {} }], ...o }),
    progressUpdated: (data: { courseName: string; progress: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "진도율 업데이트", description: data.courseName, status: "info", icon: Book01Icon, progress: { value: data.progress, showPercentage: true }, ...o }),
    expiringNotice: (data: { courseName: string; daysLeft: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "수강 기간 만료 임박", description: `${data.courseName}: ${data.daysLeft}일 남음`, status: "warning", icon: Alert02Icon, categoryIcon: Book01Icon, ...o }),
    newLessonUploaded: (data: { courseName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "새 강의가 업로드되었습니다", description: data.courseName, status: "info", icon: Book01Icon, actions: [{ label: "확인하기", onClick: () => {} }], ...o }),
  },

  // 과제/퀴즈
  assignment: {
    submitted: (data: { assignmentName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "과제가 제출되었습니다", description: data.assignmentName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: PencilIcon, ...o }),
    deadlineExceeded: (data: { assignmentName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "제출 기한이 초과되었습니다", description: data.assignmentName, status: "error", icon: MultiplicationSignCircleIcon, categoryIcon: Calendar01Icon, ...o }),
    quizResult: (data: { quizName: string; score: number; total: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "퀴즈 결과", description: `${data.quizName}: ${data.score}/${data.total}점`, status: data.score >= data.total * 0.7 ? "success" : "warning", icon: Quiz01Icon, progress: { value: (data.score / data.total) * 100, label: `${data.score}/${data.total}점` }, ...o }),
    passed: (data: { examName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "합격했습니다!", description: data.examName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: Award01Icon, ...o }),
    failed: (data: { examName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "불합격", description: `${data.examName} — 다시 도전해보세요`, status: "warning", icon: Alert02Icon, actions: [{ label: "재시험", onClick: () => {} }], ...o }),
    retryAvailable: (data: { examName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "재시험이 가능합니다", description: data.examName, status: "info", icon: Quiz01Icon, actions: [{ label: "재시험 보기", onClick: () => {} }], ...o }),
    autoSaved: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "답안이 자동 저장되었습니다", status: "info", icon: PencilIcon, ...o }),
  },

  // 수료/인증
  certificate: {
    earned: (data: { certificateName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "수료증이 발급되었습니다!", description: data.certificateName, status: "success", icon: Certificate01Icon, actions: [{ label: "다운로드", onClick: () => {} }], ...o }),
    downloadReady: (data: { certificateName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "인증서 다운로드가 준비되었습니다", description: data.certificateName, status: "success", icon: Certificate01Icon, actions: [{ label: "다운로드", onClick: () => {} }], ...o }),
    badgeEarned: (data: { badgeName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "배지를 획득했습니다!", description: data.badgeName, status: "success", icon: Award01Icon, ...o }),
    levelUp: (data: { level: number }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: `레벨 업! Lv.${data.level}`, status: "success", icon: Target01Icon, ...o }),
    rankChanged: (data: { rank: number; direction: "up" | "down" }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: `랭킹 ${data.direction === "up" ? "상승" : "하락"}`, description: `현재 ${data.rank}위`, status: data.direction === "up" ? "success" : "info", icon: Target01Icon, ...o }),
  },

  // 소통
  communication: {
    questionPosted: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "질문이 등록되었습니다", status: "success", icon: CheckmarkCircle02Icon, ...o }),
    answerReceived: (data: { questionTitle: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "답변이 달렸습니다", description: data.questionTitle, status: "info", icon: Brain01Icon, actions: [{ label: "확인하기", onClick: () => {} }], ...o }),
    announcementPosted: (data: { title: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "공지사항이 등록되었습니다", description: data.title, status: "info", icon: InformationCircleIcon, ...o }),
    liveClassStarting: (data: { className: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "라이브 수업이 곧 시작됩니다", description: data.className, status: "warning", icon: Alert02Icon, actions: [{ label: "참여하기", onClick: () => {} }], ...o }),
    studyGroupInvited: (data: { groupName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "스터디 그룹에 초대되었습니다", description: data.groupName, status: "info", icon: GraduationScrollIcon, actions: [{ label: "수락", onClick: () => {} }], ...o }),
  },

  // 결제
  payment: {
    enrolled: (data: { courseName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "수강 등록이 완료되었습니다", description: data.courseName, status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
    refunded: (data: { courseName: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "환불이 처리되었습니다", description: data.courseName, status: "info", icon: CreditCardIcon, ...o }),
    couponApplied: (data: { discount: string }, o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "할인 쿠폰이 적용되었습니다", description: `${data.discount} 할인`, status: "success", icon: CheckmarkCircle02Icon, ...o }),
    subscriptionRenewed: (o?: DomainToastOverride) =>
      showDomainToast({ domain: "education", title: "구독이 갱신되었습니다", status: "success", icon: CheckmarkCircle02Icon, categoryIcon: CreditCardIcon, ...o }),
  },
}
