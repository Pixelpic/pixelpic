const DEV_DATABASE_URL = 'postgres://am:password@localhost:5432/pixelpic';
const DEV_SESSION_SECRET = '-- DEV COOKIE SECRET; CHANGE ME --';

export const DATABASE_URL = process.env.DATABASE_URL || DEV_DATABASE_URL;

export const SESSION_SECRET = process.env.SESSION_SECRET || DEV_SESSION_SECRET;
