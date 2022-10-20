import { Router } from 'express';
import { getController } from './get';

export const UserManualRouter = Router({
  mergeParams: true,
}).get('/', getController);
