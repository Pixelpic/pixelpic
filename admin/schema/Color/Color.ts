import { get } from 'lodash';
import { join } from 'path';
import { list, graphql } from '@keystone-6/core';
import { text, virtual } from '@keystone-6/core/fields';
import { isAdmin, listOperationAccessControl, fieldMode } from '../schema.utils';
import { UserRole } from '../../constants';
import { getRgbColor } from './Color.utils';

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
        itemView: fieldMode({
          [UserRole.MANAGER]: 'read',
          [UserRole.ADMIN]: 'edit',
        }),
      },
    }),
    brick: virtual({
      field: graphql.field({
        type: graphql.list(graphql.Int),
        resolve: getRgbColor,
      }),
      ui: {
        views: join(__dirname, './brick/brick.views.tsx'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
    HEX: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      ui: {
        itemView: fieldMode({
          [UserRole.MANAGER]: 'read',
          [UserRole.ADMIN]: 'edit',
        }),
      },
    }),
    RGB: virtual({
      field: graphql.field({
        type: graphql.list(graphql.Int),
        resolve: getRgbColor,
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
      initialColumns: ['name', 'brick', 'HEX', 'RGB'],
    },
  },
});
