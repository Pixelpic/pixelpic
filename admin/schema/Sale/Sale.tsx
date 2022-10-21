import { join } from 'path';
import { get } from 'lodash';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, float, timestamp, virtual, integer } from '@keystone-6/core/fields';
import { ApiPath } from '../../constants';

export const Sale = list({
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
        resolve: (item) => generatePath(ApiPath.SALE_DOC_BOX_MANUAL, { id: get(item, 'id', '') }),
      }),
      ui: {
        views: join(__dirname, './boxManual/Views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
    userManual: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => generatePath(ApiPath.SALE_DOC_USER_MANUAL, { id: get(item, 'id', '') }),
      }),
      ui: {
        views: join(__dirname, './userManual/Views'),
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
      initialColumns: ['number', 'created', 'frame', 'image', 'price', 'boxManual', 'userManual'],
    },
  },
});
