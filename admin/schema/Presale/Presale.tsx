import { get } from 'lodash';
import { join } from 'path';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, virtual, timestamp, integer } from '@keystone-6/core/fields';
import { RoutePath } from '../../constants';

export const Presale = list({
  fields: {
    number: integer({
      validation: { isRequired: true },
      defaultValue: { kind: 'autoincrement' },
      label: '#',
    }),
    created: timestamp({
      defaultValue: {
        kind: 'now',
      },
    }),
    frame: relationship({
      ref: 'Frame',
    }),
    image: relationship({
      ref: 'Image',
    }),
    share: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => generatePath(RoutePath.PREVIEW, { id: get(item, 'id', '') }),
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
        resolve: (item) => get(item, 'id', ''),
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
