import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { updateMetaTags } from './utils/siteConfig';

// 更新网站元数据
updateMetaTags();

// @ts-ignore - 忽略类型错误
ReactDOM.createRoot(document.getElementById('root')!).render(<App />); 