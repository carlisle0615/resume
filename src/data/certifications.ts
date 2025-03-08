import { certificationInfo } from '../config/personalInfo';
import { Certification } from '../types';

// 如果personalData.ts中没有定义certificationInfo，则使用默认值
const certifications: Certification[] = certificationInfo || [
  {
    name: '示例认证',
    issuer: '示例颁发机构',
    date: new Date('2023-01-15'),
    expiryDate: new Date('2026-01-15'),
    description: '这是一个示例认证描述。请在personalData.ts中定义您的认证信息。',
    credentialUrl: 'https://example.com/credential',
  },
];

export default certifications; 