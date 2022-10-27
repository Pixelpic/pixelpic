import { get } from 'lodash';
import { FRAME } from '../../constants';
import { list, graphql } from '@keystone-6/core';
import { virtual, float, integer } from '@keystone-6/core/fields';

export const Frame = list({
  fields: {
    name: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => `${get(item, 'horizontal')}x${get(item, 'vertical')}`,
      }),
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
    horizontal: integer({
      validation: { isRequired: true },
      ui: {
        description: 'Horizontal number of plates',
      },
    }),
    vertical: integer({
      validation: { isRequired: true },
      ui: {
        description: 'Vertical number of plates',
      },
    }),
    price: float({
      validation: { isRequired: true },
    }),
    width: virtual({
      field: graphql.field({
        type: graphql.Int,
        resolve: (item) => get(item, 'horizontal', 0) * FRAME.BRICK_COUNT * FRAME.BRICK_SIZE,
      }),
      ui: {
        description: 'Width in pixels',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
      },
    }),
    height: virtual({
      field: graphql.field({
        type: graphql.Int,
        resolve: (item) => get(item, 'vertical', 0) * FRAME.BRICK_COUNT * FRAME.BRICK_SIZE,
      }),
      ui: {
        description: 'Height in pixels',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
      },
    }),
  },
  ui: {
    labelField: 'name',
    listView: {
      initialColumns: ['name', 'price'],
    },
  },
});
