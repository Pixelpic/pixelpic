import { Request, Response } from 'express';
import { jsPDF } from 'jspdf';
import { get } from 'lodash';
import { Context } from '.keystone/types';
import { Sale } from '../../../../dto';
import { getColorsMatrix } from './utils';
import { FRAME } from '../../../../../constants';

interface RequestParams {
  id: string;
}

interface RequestWithContext extends Request<RequestParams> {
  context: Context;
}

const { BRICK_COUNT, BRICK_SIZE } = FRAME;

export const getController = async (req: Request<RequestParams>, res: Response) => {
  try {
    const {
      context,
      params: { id },
    } = req as RequestWithContext;

    const sale = (await context.query.Sale.findOne({
      where: { id },
      query: 'id, frame { id, horizontal, vertical }, image { image { publicUrl } }',
    })) as Sale;

    const matrix = await getColorsMatrix(sale.image?.image?.publicUrl);

    const { horizontal = 0, vertical = 0 } = sale.frame || {};

    const doc = new jsPDF({
      format: 'a5',
      unit: 'px',
    });

    const offsetX = (doc.internal.pageSize.getWidth() - BRICK_SIZE * BRICK_COUNT) / 2;

    console.log(offsetX);

    for (let y = 0; y < (vertical || 0); y = y + 1) {
      for (let x = 0; x < (horizontal || 0); x = x + 1) {
        doc.addPage();
        for (
          let i = x * BRICK_COUNT, posX = offsetX;
          i < x * BRICK_COUNT + BRICK_COUNT;
          i++, posX += BRICK_SIZE
        ) {
          for (
            let j = y * BRICK_COUNT, posY = offsetX;
            j < y * BRICK_COUNT + BRICK_COUNT;
            j++, posY += BRICK_SIZE
          ) {
            const color = get(matrix, [i, j]);
            doc.setDrawColor(0);
            doc.setFillColor(...color);
            doc.rect(posX, posY, BRICK_SIZE, BRICK_SIZE, 'FD');
          }
        }
      }
    }

    doc.deletePage(1);

    res.set('Content-Type', 'application/pdf').send(doc.output());
  } catch (e) {
    res.status(500).send(e);
  }
};
