import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'fadeIn' | 'typewriter' | 'highlight' | 'wave';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  highlightColor?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children?: ReactNode;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  highlightColor = 'primary',
  as = 'div',
  children,
}) => {
  // 将文本拆分为单词
  const words = text.split(' ');
  
  // 将文本拆分为字符
  const characters = text.split('');
  
  // 淡入动画变体
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * staggerChildren,
        duration,
      },
    }),
  };
  
  // 打字机动画变体
  const typewriterVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        delay,
        duration: duration * 2,
      },
    },
  };
  
  // 高亮动画变体
  const highlightVariants = {
    hidden: { backgroundSize: '0% 100%' },
    visible: {
      backgroundSize: '100% 100%',
      transition: {
        delay,
        duration,
      },
    },
  };
  
  // 波浪动画变体
  const waveVariants = {
    hidden: { y: 0 },
    visible: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: delay + i * staggerChildren,
        duration: duration,
        repeat: 0,
        ease: 'easeInOut',
      },
    }),
  };
  
  // 根据组件类型渲染不同的元素
  const Component = motion[as];
  
  // 渲染不同的动画效果
  if (variant === 'typewriter') {
    return (
      <div className={`relative ${className}`}>
        <Component
          className="whitespace-nowrap overflow-hidden"
          variants={typewriterVariants}
          initial="hidden"
          animate="visible"
        >
          {text}
          {children}
        </Component>
        <motion.span
          className="absolute right-0 top-0 h-full w-[2px] bg-current"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    );
  }
  
  if (variant === 'highlight') {
    return (
      <Component
        className={`inline-block bg-gradient-to-r from-${highlightColor}-200 to-${highlightColor}-100 bg-no-repeat bg-bottom ${className}`}
        style={{ backgroundSize: '0% 40%' }}
        variants={highlightVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
        {children}
      </Component>
    );
  }
  
  if (variant === 'wave') {
    return (
      <Component className={`inline-flex ${className}`}>
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            custom={index}
            variants={waveVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
        {children}
      </Component>
    );
  }
  
  // 默认淡入动画
  return (
    <Component className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-1"
          custom={index}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {word}
        </motion.span>
      ))}
      {children}
    </Component>
  );
};

export default AnimatedText; 