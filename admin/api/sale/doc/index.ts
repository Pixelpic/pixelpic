import { Router } from 'express';
import { UserManualRouter } from './user-manual';
import { BoxManualRouter } from './box-manual';

export const DocRouter = Router({ mergeParams: true })
  .use('/user-manual', UserManualRouter)
  .use('/box-manual', BoxManualRouter);
