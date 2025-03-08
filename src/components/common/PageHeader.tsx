import { FC } from 'react';
import AnimatedBackground from '../animations/AnimatedBackground';
import AnimatedText from '../animations/AnimatedText';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'particles' | 'gradient' | 'waves';
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  height?: 'sm' | 'md' | 'lg';
  titleAnimation?: 'fadeIn' | 'typewriter' | 'highlight' | 'wave';
}

const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  variant = 'gradient',
  primaryColor = 'primary',
  secondaryColor = 'secondary',
  textColor = 'white',
  height = 'md',
  titleAnimation = 'fadeIn',
}) => {
  // 高度类
  const heightClass = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  }[height];
  
  return (
    <div className={`relative ${heightClass} overflow-hidden`}>
      {/* 添加一个半透明的遮罩层，增加文字与背景的对比度 */}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>
      
      {/* 动画背景 */}
      <AnimatedBackground
        variant={variant}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      
      {/* 内容 */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text={title}
            variant={titleAnimation}
            as="h1"
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-${textColor} text-shadow-lg`}
            delay={0.2}
            duration={0.8}
          />
          
          {subtitle && (
            <AnimatedText
              text={subtitle}
              as="p"
              className={`text-lg md:text-xl text-${textColor}/90 max-w-2xl mx-auto text-shadow`}
              delay={0.5}
              duration={0.8}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 