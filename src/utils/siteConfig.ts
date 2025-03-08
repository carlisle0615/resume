import { siteConfig } from '../config/personalInfo';

/**
 * 更新网站标题
 * @param pageTitle 页面标题，可选
 */
export const updatePageTitle = (pageTitle?: string): void => {
  document.title = pageTitle 
    ? `${pageTitle} | ${siteConfig.title}` 
    : siteConfig.title;
};

/**
 * 更新网站元数据
 */
export const updateMetaTags = (): void => {
  // 更新描述
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', siteConfig.description);
  }
  
  // 更新关键词
  let keywordsTag = document.querySelector('meta[name="keywords"]');
  if (keywordsTag) {
    keywordsTag.setAttribute('content', siteConfig.keywords);
  }
  
  // 更新作者
  let authorTag = document.querySelector('meta[name="author"]');
  if (authorTag) {
    authorTag.setAttribute('content', siteConfig.author);
  }
  
  // 更新主题色
  let themeColorTag = document.querySelector('meta[name="theme-color"]');
  if (themeColorTag) {
    themeColorTag.setAttribute('content', siteConfig.themeColor);
  }
};

export default {
  updatePageTitle,
  updateMetaTags,
  ...siteConfig,
}; 