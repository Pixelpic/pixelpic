import { get } from 'lodash';

export const getRgbColor = async (item: unknown) => {
  const hex = get(item, 'HEX', '') as string;
  const { default: hexToRgb } = await import('hex-rgb');
  const { red, green, blue } = hexToRgb(hex);
  return [red, green, blue];
};
