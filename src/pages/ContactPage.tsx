import { FC, useState } from "react";
import {
  FiClock,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import Card3D from "../components/animations/Card3D";
import PageHeader from "../components/common/PageHeader";
import profile from "../data/profile";

const ContactPage: FC = () => {
  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // 处理表单输入变化
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        department: "",
        message: "",
      });

      // 重置状态
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  // 工作时间
  const workingHours = [
    { day: "周一至周五", hours: "9:30 - 21:00" },
    { day: "周六、周日", hours: "休息（可联系）" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* 页面标题 */}
      <PageHeader
        title="联系方式"
        subtitle="随时联系我，我很乐意回答您的问题"
        variant="gradient"
        primaryColor="primary"
        secondaryColor="secondary"
        titleAnimation="fadeIn"
        height="md"
      />

      {/* 联系信息和表单部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 联系信息 */}
              <div>
                <h2 className="text-3xl font-bold mb-8">联系信息</h2>

                {/* 联系卡片 */}
                <Card3D className="mb-8" depth={10}>
                  <div className="p-6 space-y-6">
                    {/* 邮箱 */}
                    <div className="flex items-start">
                      <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                        <FiMail size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">邮箱</h3>
                        <p className="text-neutral-700">
                          {profile.contact.email}
                        </p>
                      </div>
                    </div>

                    {/* 电话 */}
                    {profile.contact.phone && (
                      <div className="flex items-start">
                        <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                          <FiPhone size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">电话</h3>
                          <p className="text-neutral-700">
                            {profile.contact.phone}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 微信 */}
                    {profile.contact.wechat && (
                      <div className="flex items-start">
                        <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                          <FiMessageSquare size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">微信</h3>
                          <p className="text-neutral-700">
                            {profile.contact.wechat}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card3D>

                {/* 工作时间卡片 */}
                <Card3D borderColor="secondary" depth={10}>
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="bg-secondary-100 text-secondary-600 p-3 rounded-full mr-4">
                        <FiClock size={24} />
                      </div>
                      <h3 className="text-lg font-semibold">工作时间</h3>
                    </div>
                    <div className="space-y-4">
                      {workingHours.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="font-medium">{item.day}</span>
                          <span className="text-neutral-600">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* 联系表单 */}
              <div>
                <h2 className="text-3xl font-bold mb-8">发送消息</h2>

                <Card3D borderColor="secondary" depth={10}>
                  <div className="p-6">
                    <form onSubmit={handleSubmit}>
                      {/* 姓名 */}
                      <div className="mb-6">
                        <label
                          htmlFor="name"
                          className="block text-neutral-700 font-medium mb-2"
                        >
                          姓名
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                        />
                      </div>

                      {/* 邮箱 */}
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block text-neutral-700 font-medium mb-2"
                        >
                          邮箱
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                        />
                      </div>

                      {/* 部门 */}
                      <div className="mb-6">
                        <label
                          htmlFor="department"
                          className="block text-neutral-700 font-medium mb-2"
                        >
                          部门/公司
                        </label>
                        <input
                          type="text"
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                        />
                      </div>

                      {/* 消息 */}
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-neutral-700 font-medium mb-2"
                        >
                          消息
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none"
                        ></textarea>
                      </div>

                      {/* 提交按钮 */}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-6 py-3 rounded-lg flex items-center ${
                            isSubmitting
                              ? "bg-neutral-400 cursor-not-allowed"
                              : "bg-secondary-600 hover:bg-secondary-700"
                          } text-white transition-colors duration-200`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              发送中...
                            </>
                          ) : (
                            <>
                              <FiSend className="mr-2" />
                              发送消息
                            </>
                          )}
                        </button>
                      </div>

                      {/* 提交状态提示 */}
                      {submitStatus === "success" && (
                        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                          消息已发送！我会尽快回复您。
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                          发送失败，请稍后重试。
                        </div>
                      )}
                    </form>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">期待与您合作</h2>
            <p className="text-lg text-neutral-600">
              无论您有任何问题或合作意向，都欢迎随时联系我。我期待着与您的交流！
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
