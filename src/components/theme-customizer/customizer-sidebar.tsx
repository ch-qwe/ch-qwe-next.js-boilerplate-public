"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { baseColorPresets, themeColorPresets, fontOptions } from "./color-presets"
import {
  useThemeCustomizer,
  applyColors,
  applyRadius,
  applyFont,
} from "./use-theme-customizer"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun03Icon, Moon02Icon, ComputerIcon } from "@hugeicons/core-free-icons"

export function CustomizerSidebar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const {
    baseColor,
    themeColor,
    radius,
    fontFamily,
    setBaseColor,
    setThemeColor,
    setRadius,
    setFontFamily,
  } = useThemeCustomizer()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    applyColors(baseColor, themeColor, resolvedTheme === "dark")
  }, [baseColor, themeColor, resolvedTheme])

  useEffect(() => {
    applyRadius(radius)
  }, [radius])

  useEffect(() => {
    applyFont(fontFamily)
  }, [fontFamily])

  return (
    <div className="flex flex-col gap-5">
      {/* Mode */}
      <div>
        <Label className="mb-2 text-xs font-medium text-muted-foreground">
          Mode
        </Label>
        <div className="flex gap-1">
          {[
            { value: "light", icon: Sun03Icon, label: "Light" },
            { value: "dark", icon: Moon02Icon, label: "Dark" },
            { value: "system", icon: ComputerIcon, label: "System" },
          ].map(({ value, icon, label }) => (
            <Button
              key={value}
              variant={mounted && theme === value ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme(value)}
              className="flex-1 gap-1"
            >
              <HugeiconsIcon icon={icon} strokeWidth={2} className="size-3" />
              {label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Base Color */}
      <div>
        <Label className="mb-2 text-xs font-medium text-muted-foreground">
          Base Color
        </Label>
        <div className="grid grid-cols-5 gap-1.5">
          {baseColorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setBaseColor(preset.name)}
              className={cn(
                "flex h-7 items-center justify-center gap-1 rounded-md border px-1.5 text-[0.625rem] font-medium transition-colors",
                baseColor === preset.name
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span
                className="size-2.5 shrink-0 rounded-full border border-foreground/20"
                style={{ background: preset.activeColor }}
              />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Theme Color */}
      <div>
        <Label className="mb-2 text-xs font-medium text-muted-foreground">
          Theme Color
        </Label>
        <div className="grid grid-cols-4 gap-1.5">
          {themeColorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setThemeColor(preset.name)}
              className={cn(
                "flex h-7 items-center justify-center gap-1.5 rounded-md border px-2 text-[0.625rem] font-medium transition-colors",
                themeColor === preset.name
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span
                className="size-3 shrink-0 rounded-full border border-foreground/20"
                style={{ background: preset.activeColor }}
              />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Radius */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <Label className="text-xs font-medium text-muted-foreground">
            Radius
          </Label>
          <span className="text-[0.625rem] tabular-nums text-muted-foreground">
            {radius.toFixed(3)}rem
          </span>
        </div>
        <Slider
          value={[radius]}
          min={0}
          max={1}
          step={0.125}
          onValueChange={(value) => setRadius(Array.isArray(value) ? value[0] : value)}
        />
      </div>

      <Separator />

      {/* Font */}
      <div>
        <Label className="mb-2 text-xs font-medium text-muted-foreground">
          Font
        </Label>
        <Select value={fontFamily} onValueChange={(v) => v && setFontFamily(v)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font.name} value={font.name}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
