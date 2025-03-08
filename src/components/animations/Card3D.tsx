import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  hoverScale?: number;
  borderGradient?: boolean;
  borderColor?: string;
  shadow?: boolean;
  onClick?: () => void;
}

const Card3D: FC<Card3DProps> = ({
  children,
  className = '',
  depth = 20,
  hoverScale = 1.05,
  borderGradient = false,
  borderColor = 'primary',
  shadow = true,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // 鼠标位置
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // 平滑的弹簧效果
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [depth, -depth]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-depth, depth]), {
    stiffness: 300,
    damping: 30,
  });
  
  // 处理鼠标移动
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 计算鼠标位置相对于卡片中心的偏移量（-0.5到0.5之间）
    const offsetX = (e.clientX - centerX) / rect.width;
    const offsetY = (e.clientY - centerY) / rect.height;
    
    x.set(offsetX);
    y.set(offsetY);
  };
  
  // 重置卡片位置
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  // 边框样式
  const borderStyle = borderGradient
    ? `p-[1px] bg-gradient-to-br from-${borderColor}-400 to-${borderColor}-600`
    : `border border-${borderColor}-200`;
  
  // 阴影样式
  const shadowStyle = shadow ? 'shadow-lg hover:shadow-xl' : '';
  
  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <motion.div
        className={`${borderStyle} rounded-xl overflow-hidden ${shadowStyle} bg-white`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card3D; 