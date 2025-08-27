import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_SC } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
  weight: ["300", "400", "500", "700"],
})

const fangzhengFont = localFont({
  src: "../public/fonts/fangzheng-lantinghei.ttf",
  display: "swap",
  variable: "--font-fangzheng",
})

export const metadata: Metadata = {
  title: "此间 Herein - 个性化桌面小组件",
  description: "此间 Herein，用精美小组件装点你的数字生活，让每个屏幕都成为独特的风景。",
  generator: "v0.app",
  keywords: ["此间", "Herein", "小组件", "桌面美化", "iOS", "App"],
  authors: [{ name: "Herein Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable} ${fangzhengFont.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${notoSansSC.style.fontFamily}, ${inter.style.fontFamily};
  --font-sans: ${notoSansSC.variable};
  --font-inter: ${inter.variable};
  --font-fangzheng: ${fangzhengFont.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
