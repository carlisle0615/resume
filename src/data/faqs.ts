import { FAQ } from '../types';
import { javaTechFAQs } from '../config/personalInfo';

// 将Java和Spring Boot FAQ转换为符合FAQ类型的数据
const javaFAQs: FAQ[] = javaTechFAQs.map((faq, index) => ({
  id: `faq-java-${index + 1}`,
  question: faq.question,
  answer: faq.answer,
  category: 'Java & Spring Boot',
}));

const faqs: FAQ[] = [
  // 工作职责相关问题
  {
    id: 'faq-role-1',
    question: '您的日常工作职责是什么？',
    answer: '我的日常工作职责包括：前端功能开发和维护、与设计师和后端开发协作、代码审查、性能优化、技术调研和评估、参与技术方案设计、指导初级开发人员等。',
    category: '工作职责',
  },
  {
    id: 'faq-role-2',
    question: '您如何确保代码质量？',
    answer: '我通过以下方式确保代码质量：遵循团队编码规范、编写单元测试和集成测试、进行代码审查、使用静态代码分析工具、持续重构优化代码、关注性能指标、定期进行技术分享和学习。',
    category: '工作职责',
  },
  {
    id: 'faq-role-3',
    question: '您如何处理紧急的生产问题？',
    answer: '处理紧急生产问题的步骤：1. 快速定位问题根源；2. 评估影响范围和严重程度；3. 制定临时解决方案先恢复服务；4. 与相关团队协作解决问题；5. 实施永久修复方案；6. 进行事后分析，制定预防措施；7. 更新文档和监控系统。',
    category: '工作职责',
  },

  // 技术相关问题
  {
    id: 'faq-tech-1',
    question: '您使用哪些前端技术栈？',
    answer: '我主要使用的前端技术栈包括：React/Vue.js作为主要框架，TypeScript进行类型检查，Tailwind CSS/SCSS进行样式开发，Redux/Vuex进行状态管理，Jest/React Testing Library进行测试，Webpack/Vite作为构建工具，以及各种性能优化和工程化工具。',
    category: '技术',
  },
  {
    id: 'faq-tech-2',
    question: '您如何处理前端性能优化？',
    answer: '前端性能优化策略包括：代码分割和懒加载、资源压缩和合并、图片优化（WebP格式、响应式图片）、缓存策略优化、减少HTTP请求、使用CDN、服务端渲染或静态生成、优化关键渲染路径、减少JavaScript执行时间、使用Web Workers处理复杂计算等。',
    category: '技术',
  },
  {
    id: 'faq-tech-3',
    question: '您如何保持技术更新？',
    answer: '我通过以下方式保持技术更新：定期阅读技术博客和文档、参与开源项目、关注GitHub趋势、参加技术会议和研讨会、订阅技术通讯、与同行交流、实践新技术、参与内部技术分享等。',
    category: '技术',
  },

  // 项目相关问题
  {
    id: 'faq-project-1',
    question: '您参与过的最具挑战性的项目是什么？',
    answer: '最具挑战性的项目是企业内部知识库系统，挑战在于需要处理大量文档和复杂的权限控制，同时保证搜索性能和用户体验。我负责前端架构设计和核心功能实现，通过优化搜索算法和引入缓存机制，将文档检索时间减少了60%，显著提升了用户体验。',
    category: '项目经验',
    relatedProjects: ['project-1'],
  },
  {
    id: 'faq-project-2',
    question: '您如何处理项目中的技术债务？',
    answer: '处理技术债务的方法：1. 建立技术债务清单并评估优先级；2. 在新功能开发的同时分配时间处理技术债务；3. 采用"童子军规则"—离开代码时让它比发现时更干净；4. 重构而非重写；5. 增加测试覆盖率；6. 更新过时的依赖；7. 改进文档；8. 定期进行代码健康检查。',
    category: '项目经验',
  },

  // 团队协作相关问题
  {
    id: 'faq-team-1',
    question: '您如何与设计师和后端开发人员协作？',
    answer: '与设计师协作：早期参与设计讨论，提供技术可行性反馈，使用设计系统和组件库，定期沟通和反馈。与后端开发协作：共同定义API规范，使用接口模拟工具并行开发，进行代码评审，共同解决集成问题，保持良好沟通。',
    category: '团队协作',
  },
  {
    id: 'faq-team-2',
    question: '您如何指导初级开发人员？',
    answer: '指导初级开发人员的方法：1. 提供清晰的任务说明和上下文；2. 进行结对编程；3. 鼓励提问和探索；4. 提供建设性反馈；5. 分享知识和最佳实践；6. 推荐学习资源；7. 逐步增加任务难度；8. 定期进行一对一指导；9. 鼓励参与代码评审；10. 认可和庆祝进步。',
    category: '团队协作',
  },
  
  // 添加Java和Spring Boot相关FAQ
  ...javaFAQs,
];

export default faqs; 