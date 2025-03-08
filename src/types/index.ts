// 项目数据结构
export interface Project {
  id: string;
  title: string;
  description: string;
  techStacks: string[];
  category: ProjectCategory;
  responsibilities: string[];
  achievements: string[];
  faqs: FAQ[];
  image?: string;
  startDate: Date;
  endDate?: Date;
}

// 项目类别枚举
export enum ProjectCategory {
  Frontend = 'frontend',
  Backend = 'backend',
  FullStack = 'fullstack',
  Mobile = 'mobile',
  Other = 'other',
}

// 项目筛选条件
export type ProjectFilter = {
  category?: ProjectCategory;
  search?: string;
  tags?: string[];
};

// FAQ数据结构
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedProjects?: string[];
}

// 技能数据结构
export interface Skill {
  name: string;
  level: number; // 1-100
  category: SkillCategory;
  description?: string;
}

// 技能类别枚举
export enum SkillCategory {
  Technical = 'technical',
  Soft = 'soft',
  Domain = 'domain',
}

// 工作经历数据结构
export interface Experience {
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
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  achievements?: string[];
  logo?: string;
  website?: string;
}

// 认证数据结构
export interface Certification {
  name: string;
  issuer: string;
  date: Date;
  expiryDate?: Date;
  description?: string;
  credentialUrl?: string;
}

// 个人资料数据结构
export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  contact: {
    email: string;
    phone?: string;
    wechat?: string;
    other?: Record<string, string>;
  };
  socialLinks?: Record<string, string>;
} 