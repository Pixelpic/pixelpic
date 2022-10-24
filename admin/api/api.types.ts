import { Request } from 'express';
import { Context } from '.keystone/types';

export interface RequestWithContext<T> extends Request<T> {
  context: Context;
}
