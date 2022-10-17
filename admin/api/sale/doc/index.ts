import { Router } from 'express';
import { UserManualRouter } from './user-manual';

const DocRouter = Router();

DocRouter.use('/user-manual', UserManualRouter);

export { DocRouter };
