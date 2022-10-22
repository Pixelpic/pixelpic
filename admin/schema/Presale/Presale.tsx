import { get } from 'lodash';
import { join } from 'path';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, virtual, timestamp, integer } from '@keystone-6/core/fields';
import { RoutePath, UserRole } from '../../constants';
import { listOperationAccessControl } from '../schema.utils';

export const Presale = list({
  access: {
    operation: {
      create: listOperationAccessControl<'create'>([UserRole.ADMIN, UserRole.MANAGER]),
      update: listOperationAccessControl<'update'>([UserRole.ADMIN, UserRole.MANAGER]),
      query: () => true,
      delete: () => true,
    },
    item: {},
  },
  fields: {
    number: integer({
      validation: { isRequired: true },
      defaultValue: { kind: 'autoincrement' },
      label: '#',
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    created: timestamp({
      defaultValue: {
        kind: 'now',
      },
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    frame: relationship({
      ref: 'Frame',
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    image: relationship({
      ref: 'Image',
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    share: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) =>
          generatePath(RoutePath.PREVIEW, {
            id: get(item, 'id', '').toString(),
          }),
      }),
      ui: {
        views: join(__dirname, './share/Views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
    convertToSale: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => get(item, 'id', '').toString(),
      }),
      ui: {
        views: join(__dirname, './convertToSale/Views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    labelField: 'number',
    hideCreate: true,
    listView: {
      initialSort: {
        field: 'created',
        direction: 'DESC',
      },
      initialColumns: ['number', 'created', 'image', 'frame', 'share', 'convertToSale'],
    },
  },
});
