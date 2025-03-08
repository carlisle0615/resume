import { motion, useInView } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  distance?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
  distance = 50,
  staggerChildren = false,
  staggerDelay = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  // 动画变体
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
  };
  
  // 子元素动画变体
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * staggerDelay,
        duration,
      },
    }),
  };
  
  // 如果需要为子元素添加交错动画
  if (staggerChildren) {
    return (
      <div ref={ref} className={className}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
              },
            },
          }}
        >
          {Array.isArray(children)
            ? children.map((child, index) => (
                <motion.div key={index} variants={childVariants} custom={index}>
                  {child}
                </motion.div>
              ))
            : <motion.div variants={childVariants}>{children}</motion.div>
          }
        </motion.div>
      </div>
    );
  }
  
  // 普通动画
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 