import { Project, ProjectCategory } from '../types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: '企业内部知识库系统',
    description: '设计并开发了一个企业内部知识库系统，用于团队成员分享和管理知识资源。该系统包括文档管理、搜索功能、权限控制和版本历史等功能。',
    techStacks: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: ProjectCategory.FullStack,
    responsibilities: [
      '负责前端架构设计和实现',
      '开发核心功能模块',
      '优化系统性能和用户体验',
      '与后端团队协作完成API集成',
    ],
    achievements: [
      '将文档检索时间减少了60%',
      '提高了团队知识共享效率',
      '获得了公司年度最佳项目奖',
    ],
    faqs: [
      {
        id: 'faq-1-1',
        question: '这个项目使用了哪些技术栈？',
        answer: '前端使用React和TypeScript，后端使用Node.js和MongoDB，样式使用Tailwind CSS。',
        category: '技术',
      },
      {
        id: 'faq-1-2',
        question: '项目中最大的技术挑战是什么？',
        answer: '实现高效的全文搜索功能是最大的挑战。我们使用了Elasticsearch来解决这个问题，并进行了性能优化，使搜索响应时间控制在200ms以内。',
        category: '技术挑战',
      },
    ],
    image: '/projects/knowledge-base.jpg',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-09-30'),
  },
  {
    id: 'project-2',
    title: '数据可视化仪表盘',
    description: '开发了一个实时数据可视化仪表盘，用于监控和分析业务关键指标。该仪表盘支持自定义图表、数据筛选和导出报告等功能。',
    techStacks: ['Vue.js', 'D3.js', 'Echarts', 'Vuex', 'SCSS'],
    category: ProjectCategory.Frontend,
    responsibilities: [
      '设计和实现数据可视化组件',
      '优化大数据集的渲染性能',
      '实现实时数据更新功能',
      '开发自定义图表配置界面',
    ],
    achievements: [
      '将数据加载时间减少了70%',
      '支持同时展示超过50个实时指标',
      '提高了业务决策效率',
    ],
    faqs: [
      {
        id: 'faq-2-1',
        question: '如何处理大量数据的实时更新？',
        answer: '我们使用了WebSocket进行实时数据传输，并采用了虚拟滚动和数据分页技术来优化性能。同时，我们实现了数据缓存和增量更新策略，减少不必要的渲染。',
        category: '技术实现',
      },
    ],
    image: '/projects/dashboard.jpg',
    startDate: new Date('2021-06-01'),
    endDate: new Date('2022-01-15'),
  },
  {
    id: 'project-3',
    title: '移动端电子商务应用',
    description: '开发了一个移动端电子商务应用，支持商品浏览、搜索、购物车、支付和订单管理等功能。该应用采用了响应式设计，提供了流畅的用户体验。',
    techStacks: ['React Native', 'Redux', 'TypeScript', 'Firebase', 'Styled Components'],
    category: ProjectCategory.Mobile,
    responsibilities: [
      '负责应用架构设计',
      '开发核心功能模块',
      '实现支付集成',
      '优化应用性能和用户体验',
    ],
    achievements: [
      '应用启动时间减少了40%',
      '提高了用户转化率15%',
      '获得了4.8/5的用户评分',
    ],
    faqs: [
      {
        id: 'faq-3-1',
        question: '如何处理离线模式下的用户操作？',
        answer: '我们实现了离线数据存储和同步机制，使用户可以在离线状态下浏览商品、添加购物车，并在恢复网络连接后自动同步数据。这使用了Redux Persist和自定义的数据同步逻辑。',
        category: '技术实现',
      },
      {
        id: 'faq-3-2',
        question: '应用的性能优化策略有哪些？',
        answer: '我们采用了多项性能优化策略，包括：图片懒加载和预加载、组件懒加载、Redux状态规范化、使用memo和useCallback减少不必要的渲染、原生模块集成处理复杂计算等。',
        category: '性能优化',
      },
    ],
    image: '/projects/ecommerce-app.jpg',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2021-03-31'),
  },
];

export default projects; 