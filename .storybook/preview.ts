import type { Preview } from "@storybook/nextjs-vite"
import type { Renderer } from "storybook/internal/types"
import { withThemeByClassName } from "@storybook/addon-themes"
import "../src/app/globals.css"

import React from "react"
import { TooltipProvider } from "../src/components/ui/tooltip"
import { Toaster } from "../src/components/ui/sonner"
import {
  baseColorPresets,
  themeColorPresets,
} from "../src/components/theme-customizer/color-presets"

const FONT_MAP: Record<string, string> = {
  Pretendard:
    "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  Inter: "'Inter', sans-serif",
  '"Noto Sans KR"': "'Noto Sans KR', sans-serif",
  "system-ui":
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const preview: Preview = {
  globalTypes: {
    font: {
      description: "Font family for preview",
      toolbar: {
        title: "Font",
        icon: "paragraph",
        items: [
          { value: "Pretendard", title: "Pretendard" },
          { value: "Inter", title: "Inter" },
          { value: '"Noto Sans KR"', title: "Noto Sans KR" },
          { value: "system-ui", title: "System UI" },
        ],
        dynamicTitle: true,
      },
    },
    themeColor: {
      description: "Theme accent color",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: themeColorPresets.map((p) => ({
          value: p.name,
          title: p.label,
        })),
        dynamicTitle: true,
      },
    },
    baseColor: {
      description: "Base background color",
      toolbar: {
        title: "Base",
        icon: "photo",
        items: baseColorPresets.map((p) => ({
          value: p.name,
          title: p.label,
        })),
        dynamicTitle: true,
      },
    },
    radius: {
      description: "Border radius scale",
      toolbar: {
        title: "Radius",
        icon: "circle",
        items: [
          { value: "0", title: "0rem" },
          { value: "0.3", title: "0.3rem" },
          { value: "0.5", title: "0.5rem" },
          { value: "0.625", title: "0.625rem" },
          { value: "0.75", title: "0.75rem" },
          { value: "1.0", title: "1.0rem" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    font: "Pretendard",
    themeColor: "neutral",
    baseColor: "neutral",
    radius: "0.625",
  },
  decorators: [
    withThemeByClassName<Renderer>({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    (Story, context) => {
      const font = context.globals.font || "Pretendard"
      const fontFamily = FONT_MAP[font] || FONT_MAP.Pretendard
      const themeColor = context.globals.themeColor || "neutral"
      const baseColor = context.globals.baseColor || "neutral"
      const radius = context.globals.radius || "0.625"
      const isDark = context.globals.theme === "dark"

      // Apply CSS variables to document root (portals like dialog/popover also inherit)
      const root = document.documentElement
      const base = baseColorPresets.find((p) => p.name === baseColor)
      const theme = themeColorPresets.find((p) => p.name === themeColor)

      if (base) {
        const colors = isDark ? base.colors.dark : base.colors.light
        for (const [key, value] of Object.entries(colors)) {
          root.style.setProperty(`--${key}`, value)
        }
      }

      if (theme) {
        const colors = isDark ? theme.colors.dark : theme.colors.light
        for (const [key, value] of Object.entries(colors)) {
          root.style.setProperty(`--${key}`, value)
        }
      }

      root.style.setProperty("--radius", `${radius}rem`)

      return React.createElement(
        "div",
        { style: { fontFamily } },
        React.createElement(
          TooltipProvider,
          null,
          React.createElement(Story),
          React.createElement(Toaster)
        )
      )
    },
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
}

export default preview
