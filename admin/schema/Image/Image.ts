import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { text } from '@keystone-6/core/fields';
import { CLOUDINARY_CONFIG } from '../../configs';

export const Image = list({
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
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
