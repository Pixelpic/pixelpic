import { FrameCreateInput } from '.keystone/types';

export const FRAMES: Required<FrameCreateInput>[] = [
  {
    name: 'XS',
    width: 3,
    height: 3,
  },
  {
    name: 'SM',
    width: 3,
    height: 4,
  },
  {
    name: 'MD',
    width: 4,
    height: 4,
  },
  {
    name: 'LG',
    width: 4,
    height: 6,
  },
  {
    name: 'XL',
    width: 5,
    height: 7,
  },
];
