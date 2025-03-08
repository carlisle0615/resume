# 个人说明书 - 需求文档

## 项目概述

本项目旨在创建一个基于 React、TypeScript 和 Tailwind CSS 的个人说明书网站，用于企业内部使用。该网站将展示个人简介、工作职责、项目经验以及常见问题解答，帮助同事更好地了解您的工作内容和专业领域。

## 目标用户

- 企业内部同事
- 新加入团队的成员
- 跨部门合作的同事
- 对您负责项目感兴趣的人员

## 功能需求

### 1. 导航系统

- 固定在顶部的导航栏
- 包含各个主要部分的快速链接
- 响应式设计，在移动设备上转为汉堡菜单
- 平滑滚动到对应部分

### 2. 主页/个人简介

- 醒目的欢迎语和职位标题
- 简短的自我介绍
- 核心技能和专长概览
- 带有动画效果的背景元素
- 个人照片（可选）

### 3. 关于我/专业背景

- 详细的个人背景介绍
- 教育和工作经历时间线
- 专业技能展示（技术和软技能）
- 个人职业发展历程
- 专业认证和成就

### 4. 项目经历

- 项目卡片网格布局
- 每个项目包含：
  - 项目名称和简介
  - 使用的技术和工具
  - 个人职责和贡献
  - 项目成果和影响
- 可筛选不同类型的项目
- 点击项目卡片可查看详情

### 5. 常见问题（FAQ）

- 分类展示常见问题
- 可展开/折叠的问答形式
- 搜索功能
- 按项目或主题分组的问题
- 相关问题推荐

### 6. 联系方式

- 企业内部联系方式
- 即时通讯工具链接
- 工作时间和可用性信息
- 可选的联系表单

## 非功能需求

### 1. 性能

- 页面加载时间不超过 2 秒
- 平滑的动画和过渡效果
- 优化图片和资源加载

### 2. 可用性

- 直观的导航和信息架构
- 清晰的视觉层次结构
- 响应式设计，适配所有设备尺寸
- 符合可访问性标准

### 3. 可维护性

- 模块化组件设计
- 清晰的代码结构和注释
- 类型安全的 TypeScript 实现
- 易于更新的内容管理

## 技术架构

### 前端框架

- React 18.x
- TypeScript 5.x
- Vite 5.x（构建工具）

### UI/样式

- Tailwind CSS 3.x
- Framer Motion（动画库）
- React Spring（物理动画）
- React Icons（图标库）

### 路由

- React Router 6.x

### 数据管理

- 使用 TypeScript 接口定义的数据结构
- 本地 JSON 数据存储
- 可选：集成后端 API

## 页面设计详情

### 主页

- 全屏欢迎区域，带有动态背景
- 打字机效果显示职位和专长
- 向下滚动箭头动画
- 简短的个人使命陈述
- 视差滚动效果

### 关于我

- 分栏布局：左侧个人信息，右侧技能和经历
- 技能以动态进度条或雷达图展示
- 工作经历以交互式时间线展示
- 背景元素随滚动产生视差效果
- 教育和认证信息卡片

### 项目经历

- 网格布局的项目卡片
- 每个卡片有悬停动画效果
- 顶部有筛选选项（按技术、时间、类型等）
- "显示更多"按钮带有加载动画
- 项目卡片点击后展开或弹出模态框显示详情
- 项目截图轮播

### 常见问题

- 分类标签导航
- 手风琴式展开/折叠问答
- 问题搜索框带有实时结果
- 相关问题推荐
- 按项目分组的问题视图

### 联系方式

- 简洁的联系信息卡片
- 社交媒体/企业内部通讯工具图标带有悬停动画
- 工作时间和可用性信息
- 可选的联系表单

## 动画效果

本项目将包含多种动画效果，以提升用户体验：

1. **页面过渡动画**

   - 页面间的平滑过渡
   - 元素进入和退出动画

2. **滚动触发动画**

   - 元素在进入视口时的淡入效果
   - 滚动进度指示器
   - 视差滚动效果

3. **交互动画**

   - 按钮和链接的悬停效果
   - 卡片翻转或展开效果
   - 导航菜单的展开/折叠动画

4. **数据可视化动画**

   - 技能进度条动画
   - 时间线进度动画
   - 项目统计数据的计数动画

5. **背景动画**
   - 渐变背景色变换
   - 几何图形的微妙移动
   - 粒子效果（可选）

## 数据结构

```typescript
// 项目数据结构
interface Project {
  id: string;
  title: string;
  description: string;
  techStacks: string[];
  category: string;
  responsibilities: string[];
  achievements: string[];
  faqs: FAQ[];
  image?: string;
  startDate: Date;
  endDate?: Date;
}

// FAQ数据结构
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedProjects?: string[];
}

// 技能数据结构
interface Skill {
  name: string;
  level: number; // 1-100
  category: "technical" | "soft" | "domain";
  description?: string;
}

// 工作经历数据结构
interface Experience {
  title: string;
  company?: string;
  department?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  technologies?: string[];
}

// 教育经历数据结构
interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  achievements?: string[];
}

// 认证数据结构
interface Certification {
  name: string;
  issuer: string;
  date: Date;
  expiryDate?: Date;
  description?: string;
  credentialUrl?: string;
}
```

## 实现计划

### 阶段一：项目设置和基础结构

1. 初始化 React+TypeScript+Vite 项目
2. 配置 Tailwind CSS
3. 设置项目文件结构
4. 创建基础组件和布局
5. 实现路由系统

### 阶段二：核心功能开发

1. 实现导航系统
2. 开发主页/个人简介部分
3. 创建关于我/专业背景部分
4. 实现项目经历展示功能
5. 开发常见问题部分
6. 创建联系方式部分

### 阶段三：动画和交互

1. 添加页面过渡动画
2. 实现滚动触发动画
3. 添加交互动画效果
4. 开发数据可视化动画
5. 实现背景动画效果

### 阶段四：优化和测试

1. 性能优化
2. 响应式设计调整
3. 可访问性测试和改进
4. 跨浏览器兼容性测试
5. 用户体验测试和改进

## 未来扩展可能性

1. 多语言支持
2. 暗色/亮色模式切换
3. 集成后端 API，实现动态内容更新
4. 添加更多交互式数据可视化
5. 集成企业内部系统
6. 添加用户反馈和评论功能
