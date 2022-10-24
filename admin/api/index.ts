import { Router } from 'express';
import * as DTO from './dto';
import { SaleRouter } from './sale';

const router = Router();

router.use('/sale', SaleRouter);

export { DTO, router };
