import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const fontStack =
  '"SF Pro Display", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "Inter", sans-serif'

export const metadata: Metadata = {
  title: "此间 Herein - 个性化桌面小组件",
  description: "此间 Herein，用精美小组件装点你的数字生活，让每个屏幕都成为独特的风景。",
  generator: "v0.app",
  keywords: ["此间", "Herein", "小组件", "桌面美化", "iOS", "App"],
  authors: [{ name: "Herein Team" }],
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <style>{`
html {
  font-family: ${fontStack};
  --font-sans: ${fontStack};
  --font-inter: ${fontStack};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
