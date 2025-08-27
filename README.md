# 此间 Herein - 官方网站

此间 Herein 的官方落地页，展示个性化桌面小组件应用。

## 技术栈

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion

## 本地开发

```bash
# 安装依赖
npm install --legacy-peer-deps

# 开发模式
npm run dev

# 构建
npm run build
```

## 部署

本站点通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支会触发自动部署。

## 项目结构

```
├── app/
│   ├── page.tsx       # 主页面
│   ├── layout.tsx     # 布局
│   └── globals.css    # 全局样式
├── public/
│   ├── images/        # 图片资源
│   ├── fonts/         # 字体文件
│   └── *.html         # 静态页面（隐私政策等）
├── components/
│   └── ui/
│       └── button.tsx # 按钮组件
└── lib/
    └── utils.ts       # 工具函数
```

## 许可

© 2025 Herein. All rights reserved.