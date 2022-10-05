import { list } from '@keystone-6/core';
import { text, integer, select } from '@keystone-6/core/fields';
import { OPTIONS } from './Frame.const';

export const Frame = list({
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    width: select({
      type: 'integer',
      options: OPTIONS,
      validation: { isRequired: true },
      ui: {
        description: 'Horizontal number of plates',
      },
    }),
    height: select({
      type: 'integer',
      options: OPTIONS,
      validation: { isRequired: true },
      ui: {
        description: 'Vertical number of plates',
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'width', 'height'],
    },
  },
});
