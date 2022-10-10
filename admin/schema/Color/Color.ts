import { list } from '@keystone-6/core';
import { text, integer } from '@keystone-6/core/fields';

export const Color = list({
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    red: integer({ validation: { isRequired: true } }),
    green: integer({ validation: { isRequired: true } }),
    blue: integer({ validation: { isRequired: true } }),
    hex: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'hex'],
    },
  },
});
