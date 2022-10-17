import { Request } from 'express';
import { Context } from '.keystone/types';

export interface RequestWithContext<P = {}> extends Request<P> {
  context: Context;
}
