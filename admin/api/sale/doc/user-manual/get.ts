import { Request, Response } from 'express';

interface RequestParams {
  id: string;
}

export const get = (req: Request<RequestParams>, res: Response) => {
  const {
    params: { id },
  } = req;
  res.send(id);
};
