import { join } from 'path';
import { get } from 'lodash';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, float, timestamp, virtual, integer } from '@keystone-6/core/fields';
import { ApiPath, UserRole } from '../../constants';
import { isAdmin, listOperationAccessControl } from '../schema.utils';

export const Sale = list({
  access: {
    operation: {
      create: listOperationAccessControl<'create'>([UserRole.ADMIN, UserRole.MANAGER]),
      update: listOperationAccessControl<'update'>([UserRole.ADMIN]),
      query: listOperationAccessControl<'query'>([UserRole.ADMIN, UserRole.MANAGER]),
      delete: listOperationAccessControl<'delete'>([UserRole.ADMIN]),
    },
  },
  fields: {
    number: integer({
      label: '#',
      validation: { isRequired: true },
      defaultValue: { kind: 'autoincrement' },
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
    price: float({
      validation: { isRequired: true },
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
    boxManual: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) =>
          generatePath(ApiPath.SALE_DOC_BOX_MANUAL, {
            id: get(item, 'id', '').toString(),
          }),
      }),
      ui: {
        views: join(__dirname, './boxManual/boxManual.views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
    userManual: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) =>
          generatePath(ApiPath.SALE_DOC_USER_MANUAL, {
            id: get(item, 'id', '').toString(),
          }),
      }),
      ui: {
        views: join(__dirname, './userManual/userManual.views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    labelField: 'number',
    hideCreate: true,
    hideDelete: isAdmin(false),
    listView: {
      initialSort: {
        field: 'created',
        direction: 'DESC',
      },
      initialColumns: ['number', 'created', 'frame', 'image', 'price', 'boxManual', 'userManual'],
    },
  },
});
