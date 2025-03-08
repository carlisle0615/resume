/**
 * 个人信息配置文件
 * 所有个人相关的信息都集中在这里，方便维护和更新
 * 
 * 注意：此文件从personalData.ts导入数据
 * personalData.ts包含敏感个人信息，已被添加到.gitignore中
 * 如果您是从GitHub克隆此项目，请创建自己的personalData.ts文件
 */

// 从personalData.ts导入所有数据
// 如果您是从GitHub克隆此项目，请创建自己的personalData.ts文件
import {
  personalInfo,
  contactInfo,
  socialLinks,
  javaTechFAQs,
  workExperience,
  educationInfo,
  certificationInfo,
  SkillLevel,
  skillsInfo,
  siteConfig
} from './personalData';

// 重新导出所有数据，使其他文件可以从这里导入
export {
  personalInfo,
  contactInfo,
  socialLinks,
  javaTechFAQs,
  workExperience,
  educationInfo,
  certificationInfo,
  SkillLevel,
  skillsInfo,
  siteConfig
}; 