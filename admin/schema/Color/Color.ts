import { get } from 'lodash';
import { join } from 'path';
import { list, graphql } from '@keystone-6/core';
import { text, virtual } from '@keystone-6/core/fields';

export const Color = list({
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    HEX: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    RGB: virtual({
      field: graphql.field({
        type: graphql.list(graphql.Int),
        resolve: async (item) => {
          const hex = get(item, 'HEX');
          const { default: hexToRgb } = await import('hex-rgb');
          const { red, green, blue } = hexToRgb(hex);
          return [red, green, blue];
        },
      }),
      ui: {
        views: join(__dirname, './Color.views.tsx'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'HEX', 'RGB'],
    },
  },
});
