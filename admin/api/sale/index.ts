import { Router } from 'express';
import { DocRouter } from './doc';

const SaleRouter = Router();

SaleRouter.use('/:id/doc', DocRouter);

export { SaleRouter };
