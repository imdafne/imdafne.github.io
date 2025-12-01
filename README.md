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

## 法律文档更新

- 静态文件位置：`public/privacy-policy.html`、`public/terms-of-service.html`、`public/youth-protection.html`（未成年人规则）。
- 更新方式：直接替换对应 HTML 文件内容，保持文件名不变，这样页脚和隐私政策中的未成年人链接不会丢失。
- 检查项：确认隐私政策第八部分的《此间儿童/青少年个人信息保护规则》链接依旧指向 `/youth-protection.html`。
- 预览：`npm run build && npx serve out` 或 `npm run dev` 本地查看。

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
