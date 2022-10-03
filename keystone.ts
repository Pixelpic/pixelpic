import { config } from '@keystone-6/core';
import { Context, TypeInfo } from '.keystone/types';
import { lists } from './admin/schema';
import { insertColors, insertPalette } from './admin/data';

import { withAuth, session } from './auth';

export default withAuth(
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
      onConnect: async (context) => {
        await insertColors(context);
        await insertPalette(context);
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
