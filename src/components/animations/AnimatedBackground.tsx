import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'particles' | 'gradient' | 'waves';
  primaryColor?: string;
  secondaryColor?: string;
  density?: number;
}

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({
  variant = 'default',
  primaryColor = 'primary',
  secondaryColor = 'secondary',
  density = 20,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 生成粒子
  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
  };

  // 生成波浪
  const generateWaves = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      amplitude: Math.random() * 20 + 10,
      frequency: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));
  };

  const particles = generateParticles(density);
  const waves = generateWaves(3);

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-${primaryColor}-500 opacity-10`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${primaryColor}-500 via-${primaryColor}-600 to-${secondaryColor}-600`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)]" />
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox={`0 0 ${windowSize.width} 200`}
          preserveAspectRatio="none"
        >
          {waves.map((wave, index) => (
            <motion.path
              key={wave.id}
              d={`M0 100 Q${windowSize.width / 4} ${100 + wave.amplitude} ${
                windowSize.width / 2
              } 100 Q${(windowSize.width / 4) * 3} ${100 - wave.amplitude} ${
                windowSize.width
              } 100 L${windowSize.width} 200 L0 200 Z`}
              fill={`var(--color-${index === 0 ? primaryColor : secondaryColor}-${500 - index * 100})`}
              fillOpacity={0.6 - index * 0.2}
              animate={{
                d: [
                  `M0 100 Q${windowSize.width / 4} ${100 + wave.amplitude} ${
                    windowSize.width / 2
                  } 100 Q${(windowSize.width / 4) * 3} ${100 - wave.amplitude} ${
                    windowSize.width
                  } 100 L${windowSize.width} 200 L0 200 Z`,
                  `M0 100 Q${windowSize.width / 4} ${100 - wave.amplitude} ${
                    windowSize.width / 2
                  } 100 Q${(windowSize.width / 4) * 3} ${100 + wave.amplitude} ${
                    windowSize.width
                  } 100 L${windowSize.width} 200 L0 200 Z`,
                  `M0 100 Q${windowSize.width / 4} ${100 + wave.amplitude} ${
                    windowSize.width / 2
                  } 100 Q${(windowSize.width / 4) * 3} ${100 - wave.amplitude} ${
                    windowSize.width
                  } 100 L${windowSize.width} 200 L0 200 Z`,
                ],
              }}
              transition={{
                duration: 10 / wave.speed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
        <div className={`absolute inset-0 bg-gradient-to-b from-${primaryColor}-600 to-transparent opacity-30`} />
      </div>
    );
  }

  // 默认背景
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute -top-40 -right-40 w-96 h-96 bg-${primaryColor}-100 rounded-full opacity-50 blur-3xl`} />
      <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-${secondaryColor}-100 rounded-full opacity-50 blur-3xl`} />
      <div className={`absolute top-1/4 left-1/3 w-72 h-72 bg-${primaryColor}-200 rounded-full opacity-30 blur-3xl`} />
      <div className={`absolute bottom-1/4 right-1/3 w-72 h-72 bg-${secondaryColor}-200 rounded-full opacity-30 blur-3xl`} />
    </div>
  );
};

export default AnimatedBackground; 