import { list } from '@keystone-6/core';
import { relationship, float, timestamp } from '@keystone-6/core/fields';

export const Sale = list({
  fields: {
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
    price: float({
      validation: { isRequired: true },
    }),
  },
  ui: {
    hideCreate: true,
    listView: {
      initialColumns: ['created', 'frame', 'image', 'price'],
    },
  },
});
