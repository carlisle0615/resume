import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  opacity?: boolean;
  scale?: boolean;
}

const ParallaxSection: FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
  opacity = true,
  scale = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // 计算移动方向和距离
  const getTransformValue = () => {
    const distance = 100 * speed;
    
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      default:
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
    }
  };
  
  // 根据方向设置变换属性
  const transformProp = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const transformValue = getTransformValue();
  
  // 透明度变换
  const opacityValue = opacity
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4])
    : 1;
  
  // 缩放变换
  const scaleValue = scale
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    : 1;
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          [transformProp]: transformValue,
          opacity: opacityValue,
          scale: scaleValue,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection; 