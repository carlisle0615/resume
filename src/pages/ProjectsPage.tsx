import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import AnimatedBackground from '../components/animations/AnimatedBackground';
import Card3D from '../components/animations/Card3D';
import ScrollReveal from '../components/animations/ScrollReveal';
import PageHeader from '../components/common/PageHeader';
import projects from '../data/projects';
import { Project, ProjectCategory } from '../types';

const ProjectsPage: FC = () => {
  // 状态
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // 所有技术标签
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.techStacks))
  ).sort();

  // 筛选项目
  useEffect(() => {
    let result = [...projects];

    // 按类别筛选
    if (selectedCategory !== 'all') {
      result = result.filter((project) => project.category === selectedCategory);
    }

    // 按标签筛选
    if (selectedTags.length > 0) {
      result = result.filter((project) =>
        selectedTags.some((tag) => project.techStacks.includes(tag))
      );
    }

    // 按搜索词筛选
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term)
      );
    }

    setFilteredProjects(result);
  }, [selectedCategory, selectedTags, searchTerm]);

  // 处理标签选择
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  // 重置筛选
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSearchTerm('');
  };

  // 显示更多项目
  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  // 格式化日期
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* 页面标题 */}
      <PageHeader 
        title="项目经历" 
        subtitle="探索我参与过的项目和解决方案"
        variant="gradient"
        primaryColor="primary"
        secondaryColor="secondary"
        titleAnimation="fadeIn"
        height="lg"
      />

      {/* 筛选部分 */}
      <div className="bg-white shadow-md py-6 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* 搜索框 */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索项目..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <FiX />
                  </button>
                )}
              </div>
            </div>

            {/* 筛选按钮 */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-200"
              >
                <FiFilter />
                筛选
                {(selectedCategory !== 'all' || selectedTags.length > 0) && (
                  <span className="w-5 h-5 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center">
                    {(selectedCategory !== 'all' ? 1 : 0) + selectedTags.length}
                  </span>
                )}
              </button>

              {(selectedCategory !== 'all' || selectedTags.length > 0) && (
                <button
                  onClick={resetFilters}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  重置
                </button>
              )}
            </div>
          </div>

          {/* 筛选选项 */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="pt-4 border-t border-neutral-200">
                  {/* 类别筛选 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">项目类别</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 rounded-lg ${
                          selectedCategory === 'all'
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        全部
                      </button>
                      {Object.values(ProjectCategory).map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-lg ${
                            selectedCategory === category
                              ? 'bg-primary-600 text-white'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 技术标签筛选 */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">技术标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagToggle(tag)}
                          className={`px-4 py-2 rounded-lg ${
                            selectedTags.includes(tag)
                              ? 'bg-secondary-600 text-white'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 项目列表 */}
      <section className="py-16 relative">
        <AnimatedBackground variant="default" />
        <div className="container mx-auto px-4 relative z-10">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">未找到匹配的项目</h3>
              <p className="text-neutral-600 mb-6">
                尝试调整筛选条件或搜索词
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                重置筛选
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <ScrollReveal
                    key={project.id}
                    variant="scale"
                    delay={index * 0.1}
                    className="h-full"
                  >
                    <Card3D 
                      className="h-full cursor-pointer"
                      borderGradient
                      depth={15}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="p-6">
                        {/* 项目图片 */}
                        {project.image && (
                          <div className="mb-4 rounded-lg overflow-hidden h-48">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        {/* 项目标题和日期 */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold mb-2 text-primary-600">
                            {project.title}
                          </h3>
                          <p className="text-sm text-neutral-500">
                            {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : '至今'}
                          </p>
                        </div>

                        {/* 项目描述 */}
                        <p className="text-neutral-600 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* 技术标签 */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.techStacks.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStacks.length > 3 && (
                            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                              +{project.techStacks.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card3D>
                  </ScrollReveal>
                ))}
              </div>

              {/* 加载更多按钮 */}
              {visibleProjects < filteredProjects.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={showMoreProjects}
                    className="px-6 py-3 bg-white border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    加载更多
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 项目详情弹窗 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 项目图片 */}
              {selectedProject.image && (
                <div className="h-64 md:h-80 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-colors duration-200"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* 项目标题和日期 */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-neutral-500">
                    {formatDate(selectedProject.startDate)} - {selectedProject.endDate ? formatDate(selectedProject.endDate) : '至今'}
                  </p>
                </div>

                {/* 项目描述 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">项目描述</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* 项目职责 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">我的职责</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600">
                    {selectedProject.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                {/* 项目成就 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">主要成就</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* 技术栈 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">技术栈</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStacks.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 常见问题 */}
                {selectedProject.faqs.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">常见问题</h3>
                    <div className="space-y-4">
                      {selectedProject.faqs.map((faq) => (
                        <div
                          key={faq.id}
                          className="bg-neutral-50 rounded-lg p-4"
                        >
                          <h4 className="font-medium text-lg mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-neutral-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage; 