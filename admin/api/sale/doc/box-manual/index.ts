import { Router } from 'express';
import { getController } from './get';

export const BoxManualRouter = Router({
  mergeParams: true,
}).get('/', getController);
