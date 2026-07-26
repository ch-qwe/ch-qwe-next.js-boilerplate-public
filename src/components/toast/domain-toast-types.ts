import type { IconSvgElement } from "@hugeicons/react"

export type DomainId =
  | "ecommerce"
  | "saas"
  | "fintech"
  | "social"
  | "messaging"
  | "education"
  | "healthcare"
  | "food-delivery"
  | "crm"
  | "content"

export type ToastStatus = "success" | "error" | "warning" | "info" | "loading" | "neutral"

export interface ToastAction {
  label: string
  onClick: () => void
}

export interface ToastProgress {
  value: number
  label?: string
  showPercentage?: boolean
}

export interface DomainToastProps {
  id: string | number
  domain: DomainId
  title: string
  description?: string
  status?: ToastStatus
  icon?: IconSvgElement
  categoryIcon?: IconSvgElement
  actions?: ToastAction[]
  progress?: ToastProgress
  timestamp?: string
  dismissible?: boolean
  className?: string
}

export type DomainToastOverride = Partial<Omit<DomainToastProps, "id" | "domain">>
