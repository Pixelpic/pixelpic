import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { CLOUDINARY_CONFIG } from '../../configs';

export const Image = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: { ...CLOUDINARY_CONFIG },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['image'],
    },
  },
});
