import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import AnimatedBackground from "../components/animations/AnimatedBackground";
import Card3D from "../components/animations/Card3D";
import ScrollReveal from "../components/animations/ScrollReveal";
import PageHeader from "../components/common/PageHeader";
import faqs from "../data/faqs";
import { FAQ } from "../types";

const FAQPage: FC = () => {
  // 状态
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // 获取所有类别
  const categories = Array.from(
    new Set(faqs.map((faq) => faq.category))
  ).sort();

  // 筛选FAQ
  useEffect(() => {
    let result = [...faqs];

    // 按类别筛选
    if (activeCategory !== "all") {
      result = result.filter((faq) => faq.category === activeCategory);
    }

    // 按搜索词筛选
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term)
      );

      // 如果有搜索词，自动展开所有匹配的FAQ
      setExpandedFAQs(result.map((faq) => faq.id));
    }

    setFilteredFAQs(result);
  }, [activeCategory, searchTerm]);

  // 切换FAQ展开/折叠状态
  const toggleFAQ = (id: string) => {
    setExpandedFAQs((prev) =>
      prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]
    );
  };

  // 展开所有FAQ
  const expandAll = () => {
    setExpandedFAQs(filteredFAQs.map((faq) => faq.id));
  };

  // 折叠所有FAQ
  const collapseAll = () => {
    setExpandedFAQs([]);
  };

  // 高亮搜索词
  const highlightText = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200 font-medium">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* 页面标题 */}
      <PageHeader
        title="常见问题"
        subtitle="了解关于我的工作和专业领域的常见问题解答"
        variant="gradient"
        primaryColor="primary"
        secondaryColor="secondary"
        titleAnimation="fadeIn"
        height="lg"
      />

      {/* 搜索和筛选部分 */}
      <div className="bg-white shadow-md py-6 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* 搜索框 */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索问题..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                  <FiSearch size={20} />
                </span>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <FiX size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* 类别筛选 */}
            <div className="w-full md:w-1/2 flex flex-wrap gap-2 justify-center md:justify-end">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeCategory === "all"
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                全部
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 展开/折叠按钮 */}
          <div className="flex justify-end mt-4">
            <button
              onClick={expandAll}
              className="text-primary-600 hover:text-primary-700 mr-4"
            >
              展开全部
            </button>
            <button
              onClick={collapseAll}
              className="text-neutral-600 hover:text-neutral-700"
            >
              折叠全部
            </button>
          </div>
        </div>
      </div>

      {/* FAQ列表 */}
      <section className="py-16 relative">
        <AnimatedBackground variant="default" />
        <div className="container mx-auto px-4 relative z-10">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">未找到匹配的问题</h3>
              <p className="text-neutral-600 mb-6">
                尝试使用不同的搜索词或选择其他类别
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                重置筛选
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <ScrollReveal staggerChildren={true} staggerDelay={0.1}>
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="mb-6">
                    <Card3D
                      depth={10}
                      hoverScale={1.02}
                      onClick={() => toggleFAQ(faq.id)}
                      className="cursor-pointer"
                    >
                      <div className="p-6">
                        {/* 问题 */}
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold text-primary-700">
                            {searchTerm
                              ? highlightText(faq.question, searchTerm)
                              : faq.question}
                          </h3>
                          <motion.div
                            animate={{
                              rotate: expandedFAQs.includes(faq.id) ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-primary-600"
                          >
                            <FiChevronDown size={24} />
                          </motion.div>
                        </div>

                        {/* 答案 */}
                        <AnimatePresence>
                          {expandedFAQs.includes(faq.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                marginTop: 16,
                              }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="text-neutral-600 leading-relaxed">
                                {searchTerm
                                  ? highlightText(faq.answer, searchTerm)
                                  : faq.answer}
                              </div>

                              {/* 相关项目 */}
                              {faq.relatedProjects &&
                                faq.relatedProjects.length > 0 && (
                                  <div className="mt-4">
                                    <p className="text-sm font-medium text-neutral-500 mb-2">
                                      相关项目:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {faq.relatedProjects.map((projectId) => (
                                        <span
                                          key={projectId}
                                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                                        >
                                          {projectId}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Card3D>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
