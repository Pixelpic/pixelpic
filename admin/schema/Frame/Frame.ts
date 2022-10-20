import { get } from 'lodash';
import { FRAME } from '../../constants';
import { list, graphql } from '@keystone-6/core';
import { text, virtual, select, float } from '@keystone-6/core/fields';
import { OPTIONS } from './Frame.const';

export const Frame = list({
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    horizontal: select({
      type: 'integer',
      options: OPTIONS,
      validation: { isRequired: true },
      ui: {
        description: 'Horizontal number of plates',
      },
    }),
    vertical: select({
      type: 'integer',
      options: OPTIONS,
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
    listView: {
      initialColumns: ['name', 'horizontal', 'vertical'],
    },
  },
});
