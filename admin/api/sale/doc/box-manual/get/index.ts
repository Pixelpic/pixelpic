import { Request, Response } from 'express';
import { jsPDF } from 'jspdf';
import { get, groupBy, orderBy } from 'lodash';
import { FRAME } from '../../../../../constants';
import { Sale, Color } from '../../../../dto';
import { loadImage } from '../../doc.utils';
import { RequestWithContext } from '../../../../api.types';

interface RequestParams {
  id: string;
}

const BASE_OFFSET_X = 30;
const BASE_OFFSET_Y = 30;
const PREVIEW_HEIGHT = 180;
const COLUMNS_COUNT = 6;
const { BRICK_SIZE } = FRAME;

export const getController = async (req: Request<RequestParams>, res: Response) => {
  try {
    const {
      context,
      params: { id },
    } = req as RequestWithContext<RequestParams>;

    const sale = (await context.query.Sale.findOne({
      where: { id },
      query: 'id, frame { id, horizontal, vertical }, image { image { publicUrl } }',
    })) as Sale;

    const colors = (await context.query.Color.findMany({
      query: 'id, name, rgb',
    })) as Color[];

    const map: Record<string, string> = colors.reduce((res, { rgb, name }) => {
      return rgb ? { ...res, [rgb]: name } : res;
    }, {});

    // console.log(map);

    const { matrix, base64 } = await loadImage(sale.image?.image?.publicUrl);

    const groups = groupBy(matrix.flat(1), ([a, b, c]) => `${a}/${b}/${c}`);

    // console.log(flat.length);

    // matrix.forEach((i) => {
    //   console.log(i.length);
    // });

    console.log(matrix.flat().length);

    const entries = orderBy(Object.entries(groups), ([key]) => map[key]);

    const { horizontal: h = 0, vertical: v = 0 } = sale.frame || {};

    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    const horizontal = h || 0;
    const vertical = v || 0;
    const previewWidth = (PREVIEW_HEIGHT / vertical) * horizontal;
    const areaWidth = doc.internal.pageSize.getWidth() - BASE_OFFSET_X * 2;
    const columnWidth = areaWidth / COLUMNS_COUNT;

    doc.addImage(base64, 'PNG', BASE_OFFSET_X, BASE_OFFSET_Y, previewWidth, PREVIEW_HEIGHT);

    for (let i = 0; i < entries.length; i++) {
      const posX = BASE_OFFSET_X + columnWidth * (i % COLUMNS_COUNT);
      const posY = BASE_OFFSET_Y * 2 + PREVIEW_HEIGHT + Math.floor(i / COLUMNS_COUNT) * 25;
      const [key, value] = entries[i];
      const [rgb] = value;
      const label = map[key];

      doc.setDrawColor(0);
      doc.saveGraphicsState();
      doc.setGState(doc.GState({ opacity: 0.85 }));
      doc.setFillColor(...rgb);
      doc.rect(posX, posY, BRICK_SIZE, BRICK_SIZE, 'FD');
      doc.restoreGraphicsState();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(label, posX + 8, posY + 11, {
        align: 'center',
        maxWidth: BRICK_SIZE,
      });
      doc.setFontSize(11);
      doc.text(`${value.length}`, posX + BRICK_SIZE + 5, posY + 11, {});

      // console.log(rgb);
    }

    const response = Buffer.from(doc.output('arraybuffer'));

    res.set('Content-Type', 'application/pdf').send(response);
  } catch (e) {
    res.status(500).send(e);
  }
};
