import { cloudinaryImage } from '@keystone-6/cloudinary';

type CloudinaryConfig = Parameters<typeof cloudinaryImage>['0']['cloudinary'];

const DEV_API_KEY = '215868541494979';
const DEV_API_SECRET = 'rYWMavKx8beiUCn-Azu6YJQesp4';
const DEV_CLOUD_NAME = 'donumx4p6';

export const CLOUDINARY_CONFIG: CloudinaryConfig = {
  apiKey: process.env.CLOUDINARY_API_KEY || DEV_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET || DEV_API_SECRET,
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || DEV_CLOUD_NAME,
};
