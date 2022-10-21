import { DTO } from '@admin/api';
import { PixelItPalette } from '../../../services';

export const getColorPalette = (palettes: DTO.Palette[] = [], palette: string): PixelItPalette => {
  const { colors } = palettes.find(({ id }) => id === palette) || {};
  return (
    colors?.reduce((res, { RGB }) => {
      const [red, green, blue] = RGB || [];
      if (red && green && blue) {
        return [...res, [red, green, blue]];
      }
      return res;
    }, [] as PixelItPalette) || []
  );
};
