/// <reference types="vite/client" />

import 'react';

declare module 'react' {
  interface ReactElement {
    // 扩展 ReactElement 类型
  }
  
  // 修复 ReactNode 类型问题
  type ReactNode = 
    | ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | Iterable<ReactNode>;
} 