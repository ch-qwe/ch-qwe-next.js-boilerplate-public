import { create } from "zustand"
import { baseColorPresets, themeColorPresets, fontOptions } from "./color-presets"

interface ThemeCustomizerState {
  baseColor: string
  themeColor: string
  radius: number
  fontFamily: string
  setBaseColor: (color: string) => void
  setThemeColor: (color: string) => void
  setRadius: (radius: number) => void
  setFontFamily: (font: string) => void
}

export const useThemeCustomizer = create<ThemeCustomizerState>((set) => ({
  baseColor: "neutral",
  themeColor: "neutral",
  radius: 0.625,
  fontFamily: "pretendard",
  setBaseColor: (color) => set({ baseColor: color }),
  setThemeColor: (color) => set({ themeColor: color }),
  setRadius: (radius) => set({ radius }),
  setFontFamily: (font) => set({ fontFamily: font }),
}))

export function applyColors(baseName: string, themeName: string, isDark: boolean) {
  const base = baseColorPresets.find((p) => p.name === baseName)
  const theme = themeColorPresets.find((p) => p.name === themeName)
  if (!base || !theme) return

  const root = document.documentElement
  const baseColors = isDark ? base.colors.dark : base.colors.light
  const themeColors = isDark ? theme.colors.dark : theme.colors.light

  Object.entries(baseColors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
  Object.entries(themeColors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}

export function applyRadius(radius: number) {
  document.documentElement.style.setProperty("--radius", `${radius}rem`)
}

export function applyFont(fontName: string) {
  const font = fontOptions.find((f) => f.name === fontName)
  if (!font) return
  document.documentElement.style.setProperty("--font-family", font.value)
}
