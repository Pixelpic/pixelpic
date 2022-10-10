import { FrameCreateInput } from '.keystone/types';

export const FRAMES: Required<FrameCreateInput>[] = [
  {
    name: 'XS',
    horizontal: 3,
    vertical: 3,
    price: 100,
  },
  {
    name: 'SM',
    horizontal: 4,
    vertical: 3,
    price: 200,
  },
  {
    name: 'MD',
    horizontal: 4,
    vertical: 4,
    price: 300,
  },
  {
    name: 'LG',
    horizontal: 6,
    vertical: 4,
    price: 400,
  },
  {
    name: 'XL',
    horizontal: 7,
    vertical: 5,
    price: 500,
  },
];
