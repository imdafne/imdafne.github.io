# 文件整理指南

## 必须保留的核心文件（会上传到GitHub）

### 应用核心
- `app/page.tsx` - 主页面
- `app/layout.tsx` - 布局文件
- `app/globals.css` - 全局样式

### 配置文件
- `package.json` - 项目依赖
- `package-lock.json` - 依赖锁定文件
- `next.config.mjs` - Next.js配置
- `tsconfig.json` - TypeScript配置
- `postcss.config.mjs` - PostCSS配置
- `.gitignore` - Git忽略配置
- `README.md` - 项目说明

### 使用的组件和工具
- `components/ui/button.tsx` - 按钮组件
- `lib/utils.ts` - 工具函数（Button组件依赖）

### 公共资源
- `public/CNAME` - GitHub Pages域名配置
- `public/fonts/fangzheng-lantinghei.ttf` - 方正兰亭黑字体
- `public/images/herein-app-screen.png` - 手机屏幕展示图
- `public/images/herein-logo.png` - Logo图片
- `public/privacy-policy.html` - 隐私政策页面
- `public/terms-of-service.html` - 用户协议页面

## 可以本地保留或删除的文件（已在.gitignore中）

### 未使用的UI组件（components/ui/）
- accordion.tsx, alert-dialog.tsx, alert.tsx, aspect-ratio.tsx
- avatar.tsx, badge.tsx, breadcrumb.tsx, calendar.tsx
- card.tsx, carousel.tsx, chart.tsx, checkbox.tsx
- collapsible.tsx, command.tsx, context-menu.tsx, dialog.tsx
- drawer.tsx, dropdown-menu.tsx, form.tsx, hover-card.tsx
- input-otp.tsx, input.tsx, label.tsx, menubar.tsx
- navigation-menu.tsx, pagination.tsx, popover.tsx, progress.tsx
- radio-group.tsx, resizable.tsx, scroll-area.tsx, select.tsx
- separator.tsx, sheet.tsx, sidebar.tsx, skeleton.tsx
- slider.tsx, sonner.tsx, switch.tsx, table.tsx
- tabs.tsx, textarea.tsx, toast.tsx, toaster.tsx
- toggle-group.tsx, toggle.tsx, tooltip.tsx
- use-mobile.tsx, use-toast.ts

### 其他未使用的文件和目录
- `components/theme-provider.tsx` - 主题提供者组件
- `hooks/` - 钩子函数目录
- `styles/globals.css` - 重复的全局样式
- `Herein.icon/` - 图标资源目录
- `icon.json` - 图标配置
- `components.json` - 组件配置

### 未使用的公共图片资源
- `public/images/app-mockup.jpeg`
- `public/images/color-palette.png`
- `public/images/gradient-bg.jpeg`
- `public/images/gradient-bg.png`
- `public/images/phone-screen.png`
- `public/placeholder*.jpg`
- `public/placeholder*.svg`
- `public/placeholder-logo.png`
- `public/placeholder-logo.svg`

## 建议操作

1. **如果要彻底清理**：可以删除所有"可以本地保留或删除的文件"部分列出的文件

2. **如果要保留以备后用**：这些文件已经添加到.gitignore，不会被提交到GitHub

3. **提交到GitHub前**：
   ```bash
   git add .
   git commit -m "精简项目结构，保留核心文件"
   git push
   ```

注意：`node_modules/`和`.next/`等目录已经在默认的.gitignore中，会自动忽略。