# 个人说明书 - 样式与编码规范

## 目录结构

```
src/
├── assets/         # 静态资源（图片、字体等）
├── components/     # 可复用组件
│   ├── common/     # 通用UI组件
│   ├── layout/     # 布局相关组件
│   ├── sections/   # 页面主要部分组件
│   └── animations/ # 动画相关组件
├── data/           # 数据文件
├── hooks/          # 自定义React Hooks
├── pages/          # 页面组件
├── styles/         # 全局样式
├── types/          # TypeScript类型定义
├── utils/          # 工具函数
├── App.tsx         # 应用入口组件
└── main.tsx        # 应用入口文件
```

## 命名规范

### 文件命名

- **组件文件**：使用 PascalCase（如`Button.tsx`、`ProjectCard.tsx`）
- **非组件文件**：使用 camelCase（如`useScrollAnimation.ts`、`formatDate.ts`）
- **样式文件**：与组件同名，使用 PascalCase（如`Button.module.css`）
- **测试文件**：与被测试文件同名，添加`.test`或`.spec`后缀（如`Button.test.tsx`）

### 变量命名

- **组件名**：使用 PascalCase（如`Button`、`ProjectCard`）
- **变量和函数**：使用 camelCase（如`isLoading`、`handleClick`）
- **常量**：使用 UPPER_SNAKE_CASE（如`MAX_ITEMS`、`API_URL`）
- **接口和类型**：使用 PascalCase，接口名前不加`I`前缀（如`Project`、`SkillProps`）
- **枚举**：使用 PascalCase（如`Category`、`Theme`）

## React 组件规范

### 组件定义

- 使用函数组件和 React Hooks
- 使用 TypeScript 的 FC 类型定义组件
- 明确定义组件的 props 接口

```tsx
// 推荐的组件定义方式
import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  isDisabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
```

### 组件结构

- 将大型组件拆分为更小的子组件
- 相关的状态和逻辑提取到自定义 Hooks 中
- 使用解构赋值获取 props 和 state
- 组件内部逻辑按以下顺序组织：
  1. 导入语句
  2. 类型定义
  3. 组件定义
  4. Hooks 调用（useState, useEffect 等）
  5. 事件处理函数
  6. 辅助函数
  7. 渲染逻辑
  8. 导出语句

## TypeScript 规范

- 为所有变量、函数参数和返回值定义类型
- 避免使用`any`类型，优先使用`unknown`
- 使用接口（Interface）定义对象结构
- 使用类型别名（Type Alias）定义联合类型和交叉类型
- 使用枚举（Enum）定义有限的选项集合
- 使用泛型增强代码的可复用性

```tsx
// 类型定义示例
interface Project {
  id: string;
  title: string;
  description: string;
  techStacks: string[];
  category: ProjectCategory;
}

enum ProjectCategory {
  Frontend = "frontend",
  Backend = "backend",
  FullStack = "fullstack",
  Mobile = "mobile",
  Other = "other",
}

type ProjectFilter = {
  category?: ProjectCategory;
  search?: string;
  tags?: string[];
};

// 使用泛型的函数示例
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}
```

## Tailwind CSS 使用规范

### 类名顺序

按照以下顺序组织 Tailwind 类名：

1. 布局（display, position, z-index）
2. 尺寸（width, height）
3. 间距（margin, padding）
4. 排版（font, text）
5. 背景（background）
6. 边框（border）
7. 效果（shadow, opacity）
8. 交互（cursor, pointer-events）
9. 响应式和状态变体（hover, focus, sm, md, lg）

```html
<!-- 推荐的类名顺序 -->
<div
  class="
  flex justify-between items-center 
  w-full h-16 
  px-4 py-2 
  text-lg font-medium text-gray-800 
  bg-white 
  border-b border-gray-200 
  shadow-sm 
  cursor-pointer 
  hover:bg-gray-50 sm:px-6
"
>
  <!-- 内容 -->
</div>
```

### 自定义类和组件

- 对于重复使用的样式组合，创建自定义 Tailwind 组件
- 在`tailwind.config.js`中扩展主题，而不是使用内联样式
- 使用`@apply`指令创建可复用的样式类

```css
/* 在全局样式文件中定义可复用类 */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
  }

  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700;
  }

  .btn-secondary {
    @apply bg-secondary-500 text-white hover:bg-secondary-600;
  }

  .btn-outline {
    @apply bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50;
  }
}
```

### 响应式设计

- 使用移动优先的设计方法
- 按照从小到大的顺序添加响应式变体（sm, md, lg, xl, 2xl）
- 避免过度使用自定义断点

```html
<!-- 响应式设计示例 -->
<div
  class="
  grid grid-cols-1 gap-4
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
"
>
  <!-- 内容 -->
</div>
```

## 动画规范

### Framer Motion

- 使用 Framer Motion 的`motion`组件创建动画
- 为复杂动画创建可复用的变体（variants）
- 使用`AnimatePresence`处理元素的进入和退出动画

```tsx
// Framer Motion动画示例
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

const Card = ({ children }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white rounded-lg p-6"
    >
      {children}
    </motion.div>
  );
};
```

### CSS 动画

- 使用 Tailwind 的动画类（如`animate-bounce`、`animate-spin`）
- 在`tailwind.config.js`中定义自定义动画
- 对于简单动画，优先使用 CSS 过渡而非 JavaScript 动画

## 代码质量规范

### 注释

- 为复杂逻辑添加注释
- 使用 JSDoc 风格为函数和组件添加文档
- 避免无意义或冗余的注释

```tsx
/**
 * 过滤项目列表
 * @param projects - 要过滤的项目列表
 * @param filter - 过滤条件
 * @returns 过滤后的项目列表
 */
function filterProjects(projects: Project[], filter: ProjectFilter): Project[] {
  return projects.filter((project) => {
    // 按类别过滤
    if (filter.category && project.category !== filter.category) {
      return false;
    }

    // 按搜索词过滤
    if (
      filter.search &&
      !project.title.toLowerCase().includes(filter.search.toLowerCase())
    ) {
      return false;
    }

    // 按标签过滤
    if (filter.tags && filter.tags.length > 0) {
      return filter.tags.some((tag) => project.techStacks.includes(tag));
    }

    return true;
  });
}
```

### 错误处理

- 使用 try/catch 捕获和处理异常
- 为异步操作添加适当的错误处理
- 使用条件渲染处理加载和错误状态

```tsx
const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

### 性能优化

- 使用`React.memo`避免不必要的重渲染
- 使用`useMemo`和`useCallback`缓存计算结果和回调函数
- 使用`React.lazy`和`Suspense`实现代码分割
- 优化列表渲染，为大型列表使用虚拟化

```tsx
// 使用React.memo优化组件
const ProjectCard = React.memo(({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      {/* 其他内容 */}
    </div>
  );
});

// 使用useMemo缓存计算结果
const SortedProjects = ({
  projects,
  sortBy,
}: {
  projects: Project[];
  sortBy: string;
}) => {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (sortBy === "date") {
        return (
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
      }
      return a.title.localeCompare(b.title);
    });
  }, [projects, sortBy]);

  return (
    <div>
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

## Git 提交规范

- 使用语义化的提交消息
- 遵循以下格式：`<type>(<scope>): <subject>`
- 常用类型：
  - `feat`：新功能
  - `fix`：修复 bug
  - `docs`：文档更新
  - `style`：代码风格更改（不影响代码功能）
  - `refactor`：代码重构
  - `perf`：性能优化
  - `test`：添加或修改测试
  - `chore`：构建过程或辅助工具的变动

```
feat(projects): 添加项目筛选功能
fix(navbar): 修复移动端菜单不能关闭的问题
docs(readme): 更新安装说明
style(components): 统一按钮样式
refactor(utils): 重构日期格式化函数
```

## 可访问性规范

- 使用语义化 HTML 元素
- 为图片添加 alt 文本
- 确保颜色对比度符合 WCAG 标准
- 支持键盘导航
- 使用 ARIA 属性增强可访问性

```tsx
// 可访问性示例
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-medium">{title}</span>
        <span className="transform transition-transform" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className={`p-4 ${isOpen ? "block" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};
```

## 总结

本文档定义了个人说明书项目的样式和编码规范，旨在确保代码的一致性、可维护性和高质量。所有团队成员应遵循这些规范，以创建一个专业、高效和用户友好的应用程序。

规范可能会随着项目的发展而调整，任何更改都应记录在此文档中并通知所有团队成员。
