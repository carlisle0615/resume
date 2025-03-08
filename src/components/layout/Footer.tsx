import { FC } from "react";
import { Link } from "react-router-dom";
import { personalInfo, socialLinks, contactInfo } from "@/config/personalInfo";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* 版权信息 */}
          <div className="text-neutral-600 mb-4 md:mb-0">
            <p>
              © {currentYear} {personalInfo.name}. 保留所有权利。
            </p>
          </div>

          {/* 联系方式 */}
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-600">联系方式: {contactInfo.email}</p>
          </div>

          {/* 社交链接 */}
          <div className="flex space-x-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                GitHub
              </a>
            )}
            <Link
              to="/contact"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              联系我
            </Link>
          </div>
        </div>

        {/* 添加合作生成信息 */}
        <div className="text-center text-neutral-500 text-sm mt-4">
          <p>
            此页面由{personalInfo.name}+
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary-600 hover:text-primary-700"
            >
              Cursor
            </a>{" "}
            IDE合作生成，这个页面可以从{" "}
            <a
              href="https://github.com/carlisle0615/resume.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary-600 hover:text-primary-700"
            >
              GitHub
            </a>{" "}
            下载
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
