import { list } from '@keystone-6/core';
import { text, relationship, password, select } from '@keystone-6/core/fields';
import { UserRole } from '../../constants';

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    role: select({
      type: 'enum',
      options: [UserRole.ADMIN, UserRole.MANAGER],
    }),
    password: password({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'role'],
    },
  },
});
