import { motion } from 'framer-motion';
import { FC } from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import AnimatedBackground from '../components/animations/AnimatedBackground';
import Card3D from '../components/animations/Card3D';
import ParallaxSection from '../components/animations/ParallaxSection';
import ScrollReveal from '../components/animations/ScrollReveal';
import PageHeader from '../components/common/PageHeader';
import certifications from '../data/certifications';
import education from '../data/education';
import experience from '../data/experience';
import profile from '../data/profile';
import skills from '../data/skills';
import { SkillCategory } from '../types';

const AboutPage: FC = () => {
  // 按类别分组技能
  const technicalSkills = skills.filter(
    (skill) => skill.category === SkillCategory.Technical
  );
  const softSkills = skills.filter(
    (skill) => skill.category === SkillCategory.Soft
  );
  const domainSkills = skills.filter(
    (skill) => skill.category === SkillCategory.Domain
  );

  // 格式化日期
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="bg-neutral-50">
      {/* 页面标题 */}
      <PageHeader 
        title="关于我" 
        subtitle="了解我的专业背景、技能和经验"
        variant="gradient"
        titleAnimation="wave"
        height="lg"
      />

      {/* 个人简介部分 */}
      <section className="py-20 relative">
        <AnimatedBackground variant="default" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card3D 
              className="mb-12"
              borderGradient
              depth={15}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* 个人照片 */}
                  {profile.avatar && (
                    <ScrollReveal
                      variant="scale"
                      className="w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0"
                    >
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </ScrollReveal>
                  )}

                  {/* 个人信息 */}
                  <ScrollReveal variant="slideRight" delay={0.2}>
                    <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                    <p className="text-xl text-primary-600 mb-4">
                      {profile.title}
                    </p>
                    <p className="text-neutral-600 mb-6">{profile.bio}</p>

                    {/* 联系信息 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">联系方式</h3>
                        <p className="text-neutral-600">
                          邮箱: {profile.contact.email}
                        </p>
                        {profile.contact.phone && (
                          <p className="text-neutral-600">
                            电话: {profile.contact.phone}
                          </p>
                        )}
                        {profile.contact.wechat && (
                          <p className="text-neutral-600">
                            微信: {profile.contact.wechat}
                          </p>
                        )}
                      </div>
                      {profile.socialLinks && (
                        <div>
                          <h3 className="text-lg font-semibold mb-2">社交媒体</h3>
                          {profile.socialLinks.github && (
                            <p className="text-neutral-600">
                              GitHub: {profile.socialLinks.github}
                            </p>
                          )}
                          {profile.socialLinks.linkedin && (
                            <p className="text-neutral-600">
                              LinkedIn: {profile.socialLinks.linkedin}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 技能部分 */}
      <section className="py-20 bg-white relative">
        <AnimatedBackground variant="particles" density={10} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">专业技能</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 技术技能 */}
            <ParallaxSection direction="up" speed={0.1}>
              <Card3D borderColor="primary" className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-primary-600">
                    技术技能
                  </h3>
                  <div className="space-y-4">
                    {technicalSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <motion.div
                            className="bg-primary-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ParallaxSection>

            {/* 软技能 */}
            <ParallaxSection direction="up" speed={0.1} className="md:mt-8">
              <Card3D borderColor="secondary" className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-secondary-600">
                    软技能
                  </h3>
                  <div className="space-y-4">
                    {softSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <motion.div
                            className="bg-secondary-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ParallaxSection>

            {/* 领域技能 */}
            <ParallaxSection direction="up" speed={0.1} className="md:mt-16">
              <Card3D borderColor="neutral" className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-neutral-600">
                    领域技能
                  </h3>
                  <div className="space-y-4">
                    {domainSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <motion.div
                            className="bg-neutral-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* 工作经验部分 */}
      <section className="py-20 bg-neutral-50 relative">
        <AnimatedBackground variant="waves" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">工作经验</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary-500 pl-8 ml-4">
              {experience.map((exp, index) => (
                <ScrollReveal
                  key={index}
                  variant="slideRight"
                  delay={index * 0.1}
                  className="mb-12 relative"
                >
                  {/* 时间点 */}
                  <div className="absolute -left-12 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <FiCalendar />
                  </div>
                  
                  <Card3D depth={10} className="h-full">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary-600">
                          {exp.title}
                        </h3>
                        <span className="text-neutral-500">
                          {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : '至今'}
                        </span>
                      </div>
                      <p className="text-lg font-medium mb-4">{exp.company}</p>
                      <p className="text-neutral-600 mb-4">{exp.description}</p>
                      
                      {/* 成就 */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">主要成就：</h4>
                          <ul className="list-disc list-inside space-y-1 text-neutral-600">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Card3D>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 教育背景部分 */}
      <section className="py-20 bg-white relative">
        <AnimatedBackground variant="default" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">教育背景</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <ScrollReveal
                key={index}
                variant="scale"
                delay={index * 0.1}
              >
                <Card3D borderGradient borderColor="secondary" className="h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-secondary-600">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium mb-2">{edu.institution}</p>
                    <p className="text-neutral-500 mb-4">
                      {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : '至今'}
                    </p>
                    {edu.description && (
                      <p className="text-neutral-600">{edu.description}</p>
                    )}
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 证书部分 */}
      <section className="py-20 bg-neutral-50 relative">
        <AnimatedBackground variant="particles" density={5} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">证书与认证</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <ScrollReveal
                key={index}
                variant="slideUp"
                delay={index * 0.1}
              >
                <Card3D depth={5} className="h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FiAward size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">
                      {cert.name}
                    </h3>
                    <p className="text-neutral-600 text-center mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-neutral-500 text-center text-sm">
                      {formatDate(cert.date)}
                    </p>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 