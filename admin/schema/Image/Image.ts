import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { text } from '@keystone-6/core/fields';
import { CLOUDINARY_CONFIG } from '../../configs';
import { UserRole } from '../../constants';
import { fieldMode } from '../schema.utils';

export const Image = list({
  fields: {
    name: text({
      validation: { isRequired: true },
      ui: {
        itemView: {
          fieldMode: 'read',
        },
      },
    }),
    image: cloudinaryImage({
      cloudinary: {
        ...CLOUDINARY_CONFIG,
        folder: 'mosaics',
      },
      ui: {
        itemView: fieldMode({
          [UserRole.ADMIN]: 'edit',
          [UserRole.MANAGER]: 'read',
        }),
      },
    }),
  },
  ui: {
    hideCreate: true,
    hideDelete: true,
    isHidden: ({
      session: {
        data: { role },
      },
    }) => {
      return role !== UserRole.ADMIN;
    },
    listView: {
      initialColumns: ['image'],
    },
  },
});
