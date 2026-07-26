"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/**
 * 모바일/데스크톱 반응형 다이얼로그.
 * - 모바일(<lg): vaul Drawer — 하단에서 슬라이드 업 (앱 같은 bottom sheet)
 * - 데스크톱(≥lg): base-ui Dialog — 화면 가운데 모달, 페이드+줌 인
 */

const DESKTOP_QUERY = "(min-width: 1024px)"

const ResponsiveDialogContext = React.createContext<{ isDesktop: boolean }>({
  isDesktop: false,
})

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = React.useState(false)
  React.useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia(DESKTOP_QUERY)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return isDesktop
}

interface ResponsiveDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function ResponsiveDialog({ open, onOpenChange, children }: ResponsiveDialogProps) {
  const isDesktop = useIsDesktop()
  return (
    <ResponsiveDialogContext.Provider value={{ isDesktop }}>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          {children}
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={onOpenChange}>
          {children}
        </Drawer>
      )}
    </ResponsiveDialogContext.Provider>
  )
}

interface ResponsiveDialogTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

function ResponsiveDialogTrigger({
  asChild,
  children,
  className,
}: ResponsiveDialogTriggerProps) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    if (asChild && React.isValidElement(children)) {
      return <DialogTrigger render={children as React.ReactElement} />
    }
    return <DialogTrigger className={className}>{children}</DialogTrigger>
  }
  return (
    <DrawerTrigger asChild={asChild} className={className}>
      {children}
    </DrawerTrigger>
  )
}

interface ResponsiveDialogContentProps {
  children: React.ReactNode
  className?: string
  /** 데스크톱 다이얼로그 우상단 X 닫기 버튼. 기본 true */
  showCloseButton?: boolean
}

function ResponsiveDialogContent({
  children,
  className,
  showCloseButton = true,
}: ResponsiveDialogContentProps) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    return (
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn("sm:max-w-md", className)}
      >
        {children}
      </DialogContent>
    )
  }
  return <DrawerContent className={className}>{children}</DrawerContent>
}

function ResponsiveDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    return <DialogHeader className={className} {...props} />
  }
  return <DrawerHeader className={className} {...props} />
}

function ResponsiveDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    return <DialogFooter className={cn("gap-2", className)} {...props} />
  }
  return (
    <DrawerFooter
      className={cn("flex-row justify-end gap-2", className)}
      {...props}
    />
  )
}

function ResponsiveDialogTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    return (
      <DialogTitle className={cn("text-base", className)} {...props} />
    )
  }
  return <DrawerTitle className={cn("text-base", className)} {...props} />
}

function ResponsiveDialogDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    return (
      <DialogDescription
        className={cn("text-sm", className)}
        {...props}
      />
    )
  }
  return (
    <DrawerDescription className={cn("text-sm", className)} {...props} />
  )
}

interface ResponsiveDialogCloseProps {
  asChild?: boolean
  children: React.ReactNode
}

function ResponsiveDialogClose({
  asChild,
  children,
}: ResponsiveDialogCloseProps) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  if (isDesktop) {
    if (asChild && React.isValidElement(children)) {
      return <DialogClose render={children as React.ReactElement} />
    }
    return <DialogClose>{children}</DialogClose>
  }
  return <DrawerClose asChild={asChild}>{children}</DrawerClose>
}

/**
 * 본문 영역. Drawer는 px가 없어 px-4가 필요하지만 Dialog는 부모 p-4가 있어서 X.
 */
function ResponsiveDialogBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { isDesktop } = React.useContext(ResponsiveDialogContext)
  return (
    <div
      data-slot="responsive-dialog-body"
      className={cn(!isDesktop && "px-4", className)}
      {...props}
    />
  )
}

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogFooter,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
  ResponsiveDialogClose,
  ResponsiveDialogBody,
}
