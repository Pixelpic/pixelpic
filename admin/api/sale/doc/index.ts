import { Router } from 'express';
import { UserManualRouter } from './user-manual';
import { BoxManualRouter } from './box-manual';

const DocRouter = Router();

DocRouter.use('/user-manual', UserManualRouter).use('/box-manual', BoxManualRouter);

export { DocRouter };
