import { get } from 'lodash';
import { list, graphql } from '@keystone-6/core';
import { text, integer, virtual } from '@keystone-6/core/fields';

export const Color = list({
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    red: integer({ validation: { isRequired: true } }),
    green: integer({ validation: { isRequired: true } }),
    blue: integer({ validation: { isRequired: true } }),
    hex: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    rgb: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => {
          const red = get(item, 'red');
          const green = get(item, 'green');
          const blue = get(item, 'blue');
          return `${red}/${green}/${blue}`;
        },
      }),
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'hex', 'rgb'],
    },
  },
});
