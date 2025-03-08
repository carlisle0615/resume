import { contactInfo, personalInfo, socialLinks } from '../config/personalInfo';
import { Profile } from '../types';

const profile: Profile = {
  name: personalInfo.name,
  title: personalInfo.title,
  bio: personalInfo.bio,
  avatar: personalInfo.avatar,
  contact: {
    email: contactInfo.email,
    phone: contactInfo.phone,
    wechat: contactInfo.wechat,
    other: contactInfo.other,
  },
  socialLinks: socialLinks,
};

export default profile; 