import React, { FC, useContext, useReducer, useRef, useLayoutEffect } from 'react';
import { get } from 'lodash';
import { FormControl, Button, Select, MenuItem, InputLabel } from '@mui/material';
import { Section, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';
import { Controls, Content, SourceImage, ResultCanvas } from './ConstructorPalette.style';
import { constructorPaletteReducer } from './ConstructorPalette.reducer';
import { ConstructorPaletteActions as Actions } from './ConstructorPalette.actions';
import { PixelIt } from './ConstructorPalette.services';
import { getColorPalette } from './ConstructorPalette.utils';

interface ConstructorPaletteProps {
  onNext: (v: { frame: string; image: string }) => void;
  onBack: () => void;
}

export const ConstructorPalette: FC<ConstructorPaletteProps> = ({ onNext, onBack }) => {
  const { cropped, palettes } = useContext(ConstructorContext);
  const image = useRef<HTMLImageElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const pixelIt = useRef<PixelIt | null>(null);

  const [{ palette }, dispatch] = useReducer(constructorPaletteReducer, {
    palette: get(palettes, ['0', 'id'], ''),
  });

  const handleOnPaletteChange = (v: string) => {
    dispatch(new Actions.SetPalette(v));
    if (pixelIt.current && palettes) {
      const res = getColorPalette(palettes, v);
      pixelIt.current.setPalette(res).draw().pixelate();
    }
  };

  const handleOnLoaded = () => {
    if (image.current && canvas.current && palettes) {
      pixelIt.current = new PixelIt({
        from: image.current,
        to: canvas.current,
        maxHeight: 500,
        maxWidth: 500,
        palette: getColorPalette(palettes, palette),
        scale: 120,
      });
      pixelIt.current.draw().pixelate();
    }
  };

  return (
    <Section>
      <Content>
        <SourceImage src={cropped} ref={image} onLoad={handleOnLoaded} />
        <ResultCanvas ref={canvas} />
      </Content>
      <Footer justify="space-between">
        <Button variant="outlined" onClick={onBack} disableElevation>
          Back
        </Button>
        <Controls>
          <FormControl size="small">
            <InputLabel>Palette</InputLabel>
            <Select
              value={palette}
              label="Palette"
              onChange={({ target: { value } }) => handleOnPaletteChange(value)}
            >
              {palettes?.map(({ id, name }) => {
                return (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Controls>
        <Button variant="contained" disableElevation>
          Save as Presale
        </Button>
      </Footer>
    </Section>
  );
};
