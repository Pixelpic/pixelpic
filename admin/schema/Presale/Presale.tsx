import { get } from 'lodash';
import { join } from 'path';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, virtual } from '@keystone-6/core/fields';
import { RoutePath } from '../../constants';

export const Presale = list({
  fields: {
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
        // listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    hideCreate: true,
    listView: {
      initialColumns: ['id', 'image', 'frame', 'share'],
    },
  },
});
