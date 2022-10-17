import jimp from 'jimp';
import { set } from 'lodash';
import { FRAME } from '../../../../../constants';

type Matrix = [number, number, number][][];
const { BRICK_SIZE } = FRAME;

export const getColorsMatrix = async (url?: string | null): Promise<Matrix> => {
  if (url) {
    const res: Matrix = [];
    const image = await jimp.read(url);
    const width = image.getWidth();
    const height = image.getHeight();
    for (let x = 0; x <= width; x = x + BRICK_SIZE) {
      for (let y = 0; y <= height; y = y + BRICK_SIZE) {
        const int = image.getPixelColor(x, y);
        const { r, g, b } = jimp.intToRGBA(int);
        set(res, `${x / BRICK_SIZE}.${y / BRICK_SIZE}`, [r, g, b]);
      }
    }
    return res;
  }
  return Promise.reject();
};
