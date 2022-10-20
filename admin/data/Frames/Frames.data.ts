import { FrameCreateInput } from '.keystone/types';

export const FRAMES: Required<FrameCreateInput>[] = [
  {
    name: 'XS',
    horizontal: 3,
    vertical: 3,
    price: 100,
  },
  {
    name: 'SM - Horizontal',
    horizontal: 4,
    vertical: 3,
    price: 200,
  },
  {
    name: 'SM - Vertical',
    horizontal: 3,
    vertical: 4,
    price: 200,
  },
  {
    name: 'MD',
    horizontal: 4,
    vertical: 4,
    price: 300,
  },
  {
    name: 'LG - Horizontal',
    horizontal: 6,
    vertical: 4,
    price: 400,
  },
  {
    name: 'LG - Vertical',
    horizontal: 4,
    vertical: 6,
    price: 400,
  },
  {
    name: 'XL - Horizontal',
    horizontal: 7,
    vertical: 5,
    price: 500,
  },
  {
    name: 'XL - Vertical',
    horizontal: 5,
    vertical: 7,
    price: 500,
  },
];
