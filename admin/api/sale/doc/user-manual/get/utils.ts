import jimp from 'jimp';
import { set } from 'lodash';
import { DTO } from '@admin/api';
import { FRAME } from '../../../../../constants';

type Matrix = [number, number, number][][];
const { BRICK_SIZE } = FRAME;

interface Image {
  matrix: Matrix;
  base64: string;
}

export const loadImage = async (url?: DTO.Maybe<string>): Promise<Image> => {
  if (url) {
    // const matrix: Matrix = [];
    const image = await jimp.read(url);
    const width = image.getWidth();
    const height = image.getHeight();

    const matrix = (() => {
      const res: Matrix = [];
      for (let x = 0; x <= width; x = x + BRICK_SIZE) {
        for (let y = 0; y <= height; y = y + BRICK_SIZE) {
          const int = image.getPixelColor(x, y);
          const { r, g, b } = jimp.intToRGBA(int);
          set(res, `${x / BRICK_SIZE}.${y / BRICK_SIZE}`, [r, g, b]);
        }
      }
      return res;
    })();

    const base64 = await (async (): Promise<string> => {
      return new Promise((resolve, reject) => {
        image.getBase64('image/png', (err, res) => {
          if (err) reject(res);
          else resolve(res);
        });
      });
    })();

    return { matrix, base64 };
  }
  return Promise.reject();
};
