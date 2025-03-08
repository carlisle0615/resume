import Layout from '@/components/layout/Layout';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProjectsPage from '@/pages/ProjectsPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      {/* @ts-ignore */}
      <Layout>
        <Routes>
          {/* @ts-ignore */}
          <Route path="/" element={<HomePage />} />
          {/* @ts-ignore */}
          <Route path="/about" element={<AboutPage />} />
          {/* @ts-ignore */}
          <Route path="/projects" element={<ProjectsPage />} />
          {/* @ts-ignore */}
          <Route path="/faq" element={<FAQPage />} />
          {/* @ts-ignore */}
          <Route path="/contact" element={<ContactPage />} />
          {/* @ts-ignore */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App; 