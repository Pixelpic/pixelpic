import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { SESSION_SECRET } from '../configs';

if (!SESSION_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('The SESSION_SECRET environment variable must be set in production');
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'id, name, role',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'role', 'password'],
  },
});

const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET!,
});

export { withAuth, session };
