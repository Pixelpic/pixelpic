import React, { FC, useContext, useReducer, useRef } from 'react';
import { get, toNumber } from 'lodash';
import { LoadingButton } from '@mui/lab';
import { FormControl, Button, Select, MenuItem, InputLabel } from '@mui/material';
import { FRAME } from '../../../constants';
import { PixelIt } from '../../../services';
import { Section, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';
import { Controls, Content, SourceImage, ResultCanvas } from './ConstructorPalette.style';
import { constructorPaletteReducer } from './ConstructorPalette.reducer';
import { ConstructorPaletteActions as Actions } from './ConstructorPalette.actions';
import { getColorPalette } from './ConstructorPalette.utils';

interface ConstructorPaletteProps {
  onNext: (v: { image: File }) => void;
  onBack: () => void;
}

export const ConstructorPalette: FC<ConstructorPaletteProps> = ({ onNext, onBack }) => {
  const { saving, cropped, palettes, frame, frames } = useContext(ConstructorContext);
  const image = useRef<HTMLImageElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const pixelIt = useRef<PixelIt | null>(null);

  const [{ palette }, dispatch] = useReducer(constructorPaletteReducer, {
    palette: get(palettes, ['0', 'id'], ''),
  });

  const { width, height } = frames?.find(({ id }) => id === frame) || {};

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
        brick: FRAME.BRICK_SIZE,
        width: toNumber(width),
        height: toNumber(height),
        from: image.current,
        to: canvas.current,
        maxHeight: 500,
        maxWidth: 500,
        palette: getColorPalette(palettes, palette),
        scale: 80,
      });
      pixelIt.current.draw().pixelate();
    }
  };

  const handleOnNext = () => {
    if (pixelIt.current) {
      pixelIt.current.toFile().then((image) => onNext({ image }));
      // onNext({ colors: pixelIt.current.getColors() });
    }
  };

  return (
    <Section>
      <Content>
        <SourceImage
          ref={image}
          src={cropped}
          width={toNumber(width)}
          height={toNumber(height)}
          onLoad={handleOnLoaded}
        />
        <ResultCanvas ref={canvas} width={toNumber(width)} height={toNumber(height)} />
      </Content>
      <Footer justify="space-between">
        <Button disableElevation disabled={saving} variant="outlined" onClick={onBack}>
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
        <LoadingButton disableElevation loading={saving} variant="contained" onClick={handleOnNext}>
          Next
        </LoadingButton>
      </Footer>
    </Section>
  );
};
