import { Request, Response } from 'express';
import { jsPDF } from 'jspdf';
import { get } from 'lodash';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Sale, Color } from '../../../../dto';
import { loadImage } from '../../doc.utils';
import { FRAME } from '../../../../../constants';
import { RequestWithContext } from '../../../../api.types';

const LOGO_PATH = resolve(process.cwd(), './admin/assets/images/logo.png');

interface RequestParams {
  id: string;
}

const { BRICK_COUNT, BRICK_SIZE } = FRAME;

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
      query: 'id, name, RGB',
    })) as Color[];

    const map: Record<string, string> = colors.reduce((res, { RGB, name }) => {
      const [r, g, b] = RGB || [];
      const rgb = [r, g, b].join('/');
      return rgb ? { ...res, [rgb]: name } : res;
    }, {});

    const { matrix, base64 } = await loadImage(sale.image?.image?.publicUrl);

    const { horizontal: h = 0, vertical: v = 0 } = sale.frame || {};

    const logo = readFileSync(LOGO_PATH).toString('base64');

    console.log(logo);

    const doc = new jsPDF({
      format: 'a5',
      unit: 'px',
    });

    const horizontal = h || 0;
    const vertical = v || 0;
    const baseOffsetX = (doc.internal.pageSize.getWidth() - BRICK_SIZE * BRICK_COUNT) / 2;
    const baseOffsetY = (doc.internal.pageSize.getWidth() - BRICK_SIZE * BRICK_COUNT) / 2;
    const previewOffsetX = baseOffsetX / 2;
    const previewOffsetY = baseOffsetY / 2;
    const previewHeight = 120;
    const previewWidth = (previewHeight / vertical) * horizontal;
    const frameOffsetX = baseOffsetX;
    const frameOffsetY = previewOffsetY + previewHeight + baseOffsetY;
    const logoDimension = doc.internal.pageSize.getWidth() - baseOffsetX * 4;

    doc.addImage(logo, 'PNG', baseOffsetX * 2, 100, logoDimension, logoDimension);

    for (let y = 0; y < vertical; y = y + 1) {
      for (let x = 0; x < horizontal; x = x + 1) {
        doc.addPage();
        doc.addImage(base64, 'PNG', previewOffsetX, previewOffsetY, previewWidth, previewHeight);
        for (
          let j = 0, posY = previewOffsetY;
          j < vertical;
          j++, posY += previewHeight / vertical
        ) {
          for (
            let i = 0, posX = previewOffsetX;
            i < horizontal;
            i++, posX += previewWidth / horizontal
          ) {
            const opacity = y === j && x === i ? 0 : 0.7;
            doc.setDrawColor(0);
            doc.saveGraphicsState();
            doc.setGState(doc.GState({ opacity }));
            doc.setFillColor(255, 255, 255);
            doc.rect(posX, posY, previewWidth / horizontal, previewHeight / vertical, 'F');
            doc.restoreGraphicsState();
          }
        }
        for (
          let i = x * BRICK_COUNT, posX = frameOffsetX;
          i < x * BRICK_COUNT + BRICK_COUNT;
          i++, posX += BRICK_SIZE
        ) {
          for (
            let j = y * BRICK_COUNT, posY = frameOffsetY;
            j < y * BRICK_COUNT + BRICK_COUNT;
            j++, posY += BRICK_SIZE
          ) {
            const color = get(matrix, [i, j]);
            const label = map[color.join('/')];
            doc.setDrawColor(0);
            doc.saveGraphicsState();
            doc.setGState(doc.GState({ opacity: 0.85 }));
            doc.setFillColor(...color);
            doc.rect(posX, posY, BRICK_SIZE, BRICK_SIZE, 'FD');
            doc.restoreGraphicsState();
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor('black');
            doc.text(label, posX + 8, posY + 11, {
              align: 'center',
              maxWidth: BRICK_SIZE,
            });
            if (posY === frameOffsetY) {
              const col = (posX - frameOffsetX) / BRICK_SIZE + 1;
              doc.setTextColor('gray');
              doc.text(`${col}`, posX + 8, posY - 6, {
                align: 'center',
                maxWidth: BRICK_SIZE,
              });
            }
            if (posX === frameOffsetX) {
              const row = parseInt(`${(posY - frameOffsetY) / BRICK_SIZE + 1}`);
              doc.setTextColor('gray');
              doc.text(`${row}`, posX - 6, posY + 11, {
                align: 'right',
                maxWidth: BRICK_SIZE,
              });
            }
          }
        }
      }
    }

    const response = Buffer.from(doc.output('arraybuffer'));

    res.set('Content-Type', 'application/pdf').send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
