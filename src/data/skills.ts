import { skillsInfo } from '../config/personalInfo';
import { Skill, SkillCategory } from '../types';

// 将配置文件中的技能信息转换为符合 Skill 类型的数组
const skills: Skill[] = [
  // 技术技能
  ...skillsInfo.technical.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: SkillCategory.Technical,
    description: skill.description,
  })),
  
  // 领域知识
  ...skillsInfo.domain.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: SkillCategory.Domain,
    description: skill.description,
  })),
  
  // 软技能
  ...skillsInfo.soft.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: SkillCategory.Soft,
    description: skill.description,
  })),
];

export default skills; 