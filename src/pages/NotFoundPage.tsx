import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">页面未找到</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          抱歉，您要查找的页面不存在或已被移动。
        </p>
        <Link
          to="/"
          className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium transition-colors duration-200 inline-block"
        >
          返回首页
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage; 