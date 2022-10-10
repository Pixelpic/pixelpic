import { list } from '@keystone-6/core';
import { text, integer } from '@keystone-6/core/fields';

export const Presale = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
});
