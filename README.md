# 个人说明书

一个基于 React、TypeScript 和 Tailwind CSS 的个人说明书网站，用于企业内部使用。该网站展示个人简介、工作职责、项目经验以及常见问题解答，帮助同事更好地了解您的工作内容和专业领域。

## 特点

- 🎨 现代化 UI 设计，基于 Tailwind CSS
- 🚀 使用 React 和 TypeScript 构建，确保类型安全
- 📱 完全响应式，适配所有设备尺寸
- ✨ 丰富的动画效果，使用 Framer Motion
- 🔍 项目筛选和搜索功能
- 🧩 模块化组件设计
- 📊 技能和经验可视化展示
- 📝 常见问题解答部分

## 技术栈

- **前端框架**: React 18
- **类型系统**: TypeScript 5
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion, React Spring
- **路由**: React Router 6
- **图标**: React Icons

## 开始使用

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 9.0.0 或更高版本

### 安装

1. 克隆仓库

```bash
git clone https://github.com/carlisle0615/resume.git
cd resume
```

2. 配置个人数据

```bash
# 复制示例配置文件
cp src/config/personalData.ts.example src/config/personalData.ts

# 编辑个人数据文件
nano src/config/personalData.ts  # 或使用您喜欢的编辑器
```

3. 安装依赖

```bash
npm install
```

4. 启动开发服务器

```bash
npm run dev
```

5. 构建生产版本

```bash
npm run build
```

6. 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── assets/         # 静态资源（图片、字体等）
├── components/     # 可复用组件
│   ├── common/     # 通用UI组件
│   ├── layout/     # 布局相关组件
│   ├── sections/   # 页面主要部分组件
│   └── animations/ # 动画相关组件
├── config/         # 配置文件
│   ├── personalData.ts        # 个人数据（已被gitignore忽略）
│   ├── personalData.ts.example # 个人数据示例文件
│   └── personalInfo.ts        # 个人数据导入和导出
├── data/           # 数据文件
├── hooks/          # 自定义React Hooks
├── pages/          # 页面组件
├── styles/         # 全局样式
├── types/          # TypeScript类型定义
├── utils/          # 工具函数
├── App.tsx         # 应用入口组件
└── main.tsx        # 应用入口文件
```

## 个人数据配置

为了保护个人隐私，本项目将敏感个人信息存储在 `src/config/personalData.ts` 文件中，并已将其添加到 `.gitignore` 中，确保不会被提交到公共仓库。

如果您是从 GitHub 克隆此项目，请按照以下步骤配置个人数据：

1. 复制示例配置文件：`cp src/config/personalData.ts.example src/config/personalData.ts`
2. 编辑 `personalData.ts` 文件，用您自己的信息替换示例数据
3. 所有其他文件都会从 `personalInfo.ts` 导入数据，而 `personalInfo.ts` 会从 `personalData.ts` 导入数据

这种设计允许您在公共仓库中共享代码，同时保护个人敏感信息。

## 自定义内容

除了配置个人数据外，您还可以自定义网站的其他内容：

- `src/data/faqs.ts`: 常见问题解答
- `src/data/projects.ts`: 项目经验
- 其他数据文件

## 文档

- [需求文档](./requirements_doc.md): 详细的项目需求和设计方案
- [样式规范](./styles.md): 项目的编码规则和样式规范

## 贡献

欢迎提交问题和改进建议！请先查看现有问题，然后再创建新问题。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。
