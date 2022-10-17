import { Router } from 'express';
import { get } from './get';

export const UserManualRouter = Router({
  mergeParams: true,
}).get('/', get);
