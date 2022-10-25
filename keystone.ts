import { config } from '@keystone-6/core';
import { lists } from './admin/schema';
import { insertColors, insertPalette, insertFrames } from './admin/data';
import { withAuth, session } from './admin/auth';
import { router as ApiRouter } from './admin/api';
import { DATABASE_URL } from './admin/configs';

export default withAuth(
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'postgresql',
      url: DATABASE_URL,
      onConnect: async (context) => {
        await insertColors(context);
        await insertPalette(context);
        await insertFrames(context);
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
    experimental: {
      generateNodeAPI: true,
      generateNextGraphqlAPI: true,
    },
    server: {
      extendExpressApp: (app, createContext) => {
        app.use(
          '/api',
          async (req, res, next) => {
            (req as any).context = await createContext(req, res);
            next();
          },
          ApiRouter
        );
      },
    },
  })
);
