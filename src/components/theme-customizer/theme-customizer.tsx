"use client"

import { CustomizerSidebar } from "./customizer-sidebar"
import { ComponentPreview } from "./component-preview"

export function ThemeCustomizer() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside className="shrink-0 border-b bg-card p-4 lg:w-72 lg:border-r lg:border-b-0">
        <div className="mb-4">
          <h1 className="text-sm font-semibold">Theme Customizer</h1>
          <p className="text-xs text-muted-foreground">
            Customize and preview your design system
          </p>
        </div>
        <CustomizerSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto bg-background p-4 lg:p-6">
        <ComponentPreview />
      </main>
    </div>
  )
}
