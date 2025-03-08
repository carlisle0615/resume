import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCode, FiShield, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import profile from "../data/profile";

const HomePage: FC = () => {
  // 滚动动画
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  // 视差效果
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  // 打字机效果
  const [typedText, setTypedText] = useState("");
  const fullText = profile.title;

  useEffect(() => {
    if (fullText.length === 0) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  // 背景动画元素
  const bgElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="overflow-hidden">
      {/* Hero Section - 现代化设计 */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white"
      >
        {/* 背景动画元素 */}
        {bgElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">个人说明书</span>
              <span className="text-gradient-secondary inline-block mt-2">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              了解我的工作职责、项目经验和专业领域
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/about"
                className="btn bg-white text-primary-600 hover:bg-white/90 group"
              >
                了解更多
                <FiArrowRight className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline border-white text-white hover:bg-white/10"
              >
                查看项目经历
              </Link>
            </motion.div>
          </motion.div>

          {/* 向下滚动指示器 */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 简介部分 - 玻璃态设计 */}
      <section
        ref={infoRef}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* 背景装饰 */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInfoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient-primary">我是谁？</span>
            </motion.h2>

            <div className="glass-container backdrop-blur-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  作为
                  <span className="font-semibold text-primary-600">
                    {profile.title}
                  </span>
                  ，我负责[主要职责]。我拥有[X年]的行业经验，专注于[专业领域]。
                </p>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  我的工作涉及[具体工作内容]，通过[工作方式]来[实现目标]。我擅长[技能和专长]，并且热衷于[兴趣或价值观]。
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  在这个个人说明书中，您可以了解我的专业背景、项目经验以及常见问题的解答。如果您有任何问题，欢迎随时联系我。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心能力部分 - 3D卡片效果 */}
      <section
        ref={skillsRef}
        className="py-24 bg-neutral-50 relative overflow-hidden"
      >
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient-secondary">核心能力</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 能力卡片 1 */}
            <motion.div
              className="card-3d card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-soft">
                    <FiCode size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    技术专长
                  </h3>
                  <p className="text-neutral-600 text-center">
                    精通[技术领域]，包括[具体技术]。能够[技术能力描述]，并且善于[技术优势]。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 能力卡片 2 */}
            <motion.div
              className="card-3d card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-soft">
                    <FiUsers size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    团队协作
                  </h3>
                  <p className="text-neutral-600 text-center">
                    擅长[团队协作方式]，能够[协作能力描述]。注重[协作价值观]，确保[协作目标]。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 能力卡片 3 */}
            <motion.div
              className="card-3d card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-soft">
                    <FiShield size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    问题解决
                  </h3>
                  <p className="text-neutral-600 text-center">
                    具备[问题解决能力]，能够[解决问题的方法]。通过[思考方式]来[解决复杂问题]。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 快速链接部分 - 现代卡片设计 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient-primary">快速了解</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link
              to="/projects"
              className="group relative overflow-hidden rounded-2xl shadow-medium transition-all duration-500 hover:shadow-glow-primary"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-90 z-10"></div>
              <div className="absolute inset-0 bg-[url('/images/code-bg.jpg')] bg-cover bg-center"></div>
              <div className="relative z-20 p-10">
                <h3 className="text-3xl font-bold mb-4 text-white">项目经历</h3>
                <p className="text-white/90 mb-8 text-lg">
                  了解我参与过的项目、担任的角色以及取得的成果。
                </p>
                <div className="flex items-center text-white">
                  <span className="font-medium">查看详情</span>
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                {/* 装饰元素 */}
                <div className="absolute bottom-6 right-6 w-20 h-20 border-4 border-white/20 rounded-full"></div>
                <div className="absolute top-6 right-20 w-10 h-10 border-2 border-white/20 rounded-full"></div>
              </div>
            </Link>

            <Link
              to="/faq"
              className="group relative overflow-hidden rounded-2xl shadow-medium transition-all duration-500 hover:shadow-glow-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-500 opacity-90 z-10"></div>
              <div className="absolute inset-0 bg-[url('/images/faq-bg.jpg')] bg-cover bg-center"></div>
              <div className="relative z-20 p-10">
                <h3 className="text-3xl font-bold mb-4 text-white">常见问题</h3>
                <p className="text-white/90 mb-8 text-lg">
                  查看关于我的工作、项目和专业领域的常见问题解答。
                </p>
                <div className="flex items-center text-white">
                  <span className="font-medium">查看详情</span>
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                {/* 装饰元素 */}
                <div className="absolute bottom-6 right-6 w-20 h-20 border-4 border-white/20 rounded-full"></div>
                <div className="absolute top-6 right-20 w-10 h-10 border-2 border-white/20 rounded-full"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA部分 */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备好了解更多？
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              浏览我的完整个人资料，了解我的专业背景、技能和项目经验。
            </p>
            <Link
              to="/about"
              className="btn bg-white text-primary-800 hover:bg-white/90 group"
            >
              查看完整资料
              <FiArrowRight className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
