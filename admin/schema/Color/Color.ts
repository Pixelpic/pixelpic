import { get } from 'lodash';
import { join } from 'path';
import { list, graphql } from '@keystone-6/core';
import { text, virtual } from '@keystone-6/core/fields';
import { isAdmin, listOperationAccessControl } from '../schema.utils';
import { UserRole } from '../../constants';

export const Color = list({
  access: {
    operation: {
      create: listOperationAccessControl<'create'>([UserRole.ADMIN]),
      update: listOperationAccessControl<'update'>([UserRole.ADMIN]),
      query: () => true,
      delete: listOperationAccessControl<'delete'>([UserRole.ADMIN]),
    },
  },
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    HEX: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    RGB: virtual({
      field: graphql.field({
        type: graphql.list(graphql.Int),
        resolve: async (item) => {
          const hex = get(item, 'HEX', '');
          const { default: hexToRgb } = await import('hex-rgb');
          const { red, green, blue } = hexToRgb(hex);
          return [red, green, blue];
        },
      }),
      ui: {
        views: join(__dirname, './rgb/rgb.views.tsx'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    hideCreate: isAdmin(false),
    hideDelete: isAdmin(false),
    listView: {
      initialColumns: ['name', 'HEX', 'RGB'],
    },
  },
});
