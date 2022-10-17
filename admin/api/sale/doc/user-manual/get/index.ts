import axios from 'axios';
import { Request, Response } from 'express';
import { jsPDF } from 'jspdf';
import { Context } from '.keystone/types';
import { Sale } from '../../../../dto';
import { loadImage } from './utils';

interface RequestParams {
  id: string;
}

interface RequestWithContext extends Request<RequestParams> {
  context: Context;
}

export const get = async (req: Request<RequestParams>, res: Response) => {
  try {
    const {
      context,
      params: { id },
    } = req as RequestWithContext;

    const sale = (await context.query.Sale.findOne({
      where: { id },
      query: 'id, frame { id, horizontal, vertical }, image { image { publicUrl } }',
    })) as Sale;

    const image = await loadImage(sale.image?.image?.publicUrl);

    console.log(image);

    const doc = new jsPDF({
      format: 'a5',
    });

    res.set('Content-Type', 'application/pdf').send(doc.output());
  } catch (e) {
    res.status(500).send(e);
  }
};
