import { list } from '@keystone-6/core';
import { text, password, select } from '@keystone-6/core/fields';
import { UserRole } from '../../constants';
import { isAdmin, fieldMode } from '../schema.utils';
import { itemViewFieldMode } from './User.utils';

export const User = list({
  fields: {
    name: text({
      validation: { isRequired: true },
      ui: {
        itemView: {
          fieldMode: itemViewFieldMode,
        },
      },
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
      ui: {
        itemView: {
          fieldMode: itemViewFieldMode,
        },
      },
    }),
    phone: text({
      isFilterable: true,
      ui: {
        itemView: {
          fieldMode: itemViewFieldMode,
        },
      },
    }),
    role: select({
      type: 'enum',
      validation: { isRequired: true },
      options: [UserRole.ADMIN, UserRole.MANAGER],
      ui: {
        itemView: fieldMode({
          [UserRole.ADMIN]: 'edit',
          [UserRole.MANAGER]: 'hidden',
        }),
      },
    }),
    password: password({
      validation: { isRequired: true },
      ui: {
        itemView: {
          fieldMode: itemViewFieldMode,
        },
      },
    }),
  },
  ui: {
    hideCreate: isAdmin(false),
    hideDelete: isAdmin(false),
    listView: {
      initialColumns: ['name', 'role'],
    },
  },
});
