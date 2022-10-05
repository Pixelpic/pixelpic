import { FrameCreateInput } from '.keystone/types';

export const FRAMES: Required<FrameCreateInput>[] = [
  {
    name: 'XS',
    width: 3,
    height: 3,
    price: 100,
  },
  {
    name: 'SM',
    width: 3,
    height: 4,
    price: 200,
  },
  {
    name: 'MD',
    width: 4,
    height: 4,
    price: 300,
  },
  {
    name: 'LG',
    width: 4,
    height: 6,
    price: 400,
  },
  {
    name: 'XL',
    width: 5,
    height: 7,
    price: 500,
  },
];
