import { get } from 'lodash';
import { DTO } from '@admin/api';
import { PixelItPalette } from '../../../services';

export const getColorPalette = (palettes: DTO.Palette[] = [], palette: string): PixelItPalette => {
  const { colors } = palettes.find(({ id }) => id === palette) || {};
  return (
    colors?.reduce((res, { RGB }) => {
      const red = get(RGB, '0', 0);
      const green = get(RGB, '1', 0);
      const blue = get(RGB, '2', 0);
      return [...res, [red, green, blue]];
    }, [] as PixelItPalette) || []
  );
};
