import { list } from '@keystone-6/core';
import { text, relationship } from '@keystone-6/core/fields';

export const Palette = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    colors: relationship({
      ref: 'Color',
      many: true,
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
});
