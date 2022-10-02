import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

export const Palette = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
});
