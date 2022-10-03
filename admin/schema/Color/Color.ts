import { list } from '@keystone-6/core';
import { text, integer } from '@keystone-6/core/fields';

export const Color = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    key: text({ validation: { isRequired: true } }),
    red: integer({ validation: { isRequired: true } }),
    green: integer({ validation: { isRequired: true } }),
    blue: integer({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
});
