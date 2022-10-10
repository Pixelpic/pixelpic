import { DTO } from '@admin/api';
import { PixelItPalette } from './ConstructorPalette.services';

export const getColorPalette = (palettes: DTO.Palette[] = [], palette: string): PixelItPalette => {
  const { colors } = palettes.find(({ id }) => id === palette) || {};
  return (
    colors?.reduce((res, { red, green, blue }) => {
      if (red && green && blue) {
        return [...res, [red, green, blue]];
      }
      return res;
    }, [] as PixelItPalette) || []
  );
};
