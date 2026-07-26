import { cva } from "class-variance-authority"

export const statusConfig = {
  success: {
    light: { iconBg: "oklch(0.95 0.05 145)", iconColor: "oklch(0.50 0.18 145)" },
    dark:  { iconBg: "oklch(0.25 0.06 145)", iconColor: "oklch(0.72 0.17 145)" },
  },
  error: {
    light: { iconBg: "oklch(0.95 0.04 25)", iconColor: "oklch(0.55 0.22 25)" },
    dark:  { iconBg: "oklch(0.25 0.06 25)", iconColor: "oklch(0.72 0.19 25)" },
  },
  warning: {
    light: { iconBg: "oklch(0.96 0.06 80)", iconColor: "oklch(0.65 0.18 80)" },
    dark:  { iconBg: "oklch(0.25 0.06 80)", iconColor: "oklch(0.78 0.16 80)" },
  },
  info: {
    light: { iconBg: "oklch(0.95 0.04 250)", iconColor: "oklch(0.52 0.20 250)" },
    dark:  { iconBg: "oklch(0.25 0.06 250)", iconColor: "oklch(0.68 0.18 250)" },
  },
  loading: {
    light: { iconBg: "oklch(0.96 0 0)", iconColor: "oklch(0.45 0 0)" },
    dark:  { iconBg: "oklch(0.28 0 0)", iconColor: "oklch(0.70 0 0)" },
  },
  neutral: {
    light: { iconBg: "oklch(0.96 0 0)", iconColor: "oklch(0.35 0 0)" },
    dark:  { iconBg: "oklch(0.28 0 0)", iconColor: "oklch(0.80 0 0)" },
  },
} as const

export const domainToastVariants = cva(
  "relative flex w-[360px] items-start gap-3 rounded-xl border border-border/60 bg-popover/95 p-3 text-popover-foreground shadow-xl shadow-black/8 backdrop-blur-xl dark:border-border/40 dark:bg-popover/90 dark:shadow-black/30",
  {
    variants: {
      hasProgress: {
        true: "pb-2.5",
        false: "",
      },
    },
    defaultVariants: {
      hasProgress: false,
    },
  }
)
