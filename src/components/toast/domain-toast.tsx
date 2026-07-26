"use client"

import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Loading03Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { statusConfig, domainToastVariants } from "./domain-toast-variants"
import type { DomainToastProps, ToastStatus } from "./domain-toast-types"

function StatusIcon({ status, icon, categoryIcon }: { status: ToastStatus; icon?: DomainToastProps["icon"]; categoryIcon?: DomainToastProps["icon"] }) {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  const colors = statusConfig[status][isDark ? "dark" : "light"]
  const displayIcon = icon ?? categoryIcon

  if (!displayIcon) return null

  return (
    <div
      className="flex size-8 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: colors.iconBg, color: colors.iconColor }}
    >
      <HugeiconsIcon
        icon={displayIcon}
        strokeWidth={1.8}
        className={cn("size-[18px]", status === "loading" && "animate-spin")}
      />
    </div>
  )
}

function DomainToast({
  id,
  title,
  description,
  status = "neutral",
  icon,
  categoryIcon,
  actions,
  progress,
  timestamp,
  dismissible = true,
  className,
}: DomainToastProps) {
  const displayIcon = status === "loading" ? Loading03Icon : (icon ?? categoryIcon)

  return (
    <div className={cn(domainToastVariants({ hasProgress: !!progress }), className)}>
      <StatusIcon status={status} icon={displayIcon} categoryIcon={categoryIcon} />

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <div className="flex items-center gap-2">
          <p className="truncate text-[13px]/tight font-semibold">{title}</p>
          {timestamp && (
            <span className="shrink-0 text-[10px] text-muted-foreground">{timestamp}</span>
          )}
        </div>
        {description && (
          <p className="truncate text-xs/normal text-muted-foreground">{description}</p>
        )}

        {progress && (
          <div className="mt-1.5">
            {(progress.label || progress.showPercentage) && (
              <div className="mb-1 flex items-center justify-between text-[10px] text-muted-foreground">
                {progress.label && <span>{progress.label}</span>}
                {progress.showPercentage && <span>{Math.round(progress.value)}%</span>}
              </div>
            )}
            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-foreground/70 transition-all duration-500 dark:bg-foreground/50"
                style={{ width: `${progress.value}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {actions && actions.length > 0 && (
        <div className="flex shrink-0 items-center gap-1.5 self-center">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                i === 0
                  ? "bg-foreground text-background hover:bg-foreground/85"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      {dismissible && !actions?.length && (
        <button
          onClick={() => toast.dismiss(id)}
          className="shrink-0 self-center rounded-md p-1 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground"
        >
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} className="size-3.5" />
        </button>
      )}
    </div>
  )
}

function showDomainToast(props: Omit<DomainToastProps, "id">) {
  return toast.custom(
    (id) => <DomainToast {...props} id={id} />,
    {
      duration: props.progress ? Infinity : 4000,
      ...(props.dismissible === false ? { dismissible: false } : {}),
    }
  )
}

export { DomainToast, showDomainToast }
