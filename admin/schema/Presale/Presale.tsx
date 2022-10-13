import { list } from '@keystone-6/core';
import { relationship, json, text } from '@keystone-6/core/fields';

export const Presale = list({
  fields: {
    frame: relationship({
      ref: 'Frame',
    }),
    image: relationship({
      ref: 'Image',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['id', 'image', 'frame'],
    },
  },
});
