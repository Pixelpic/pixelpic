import React, { FC, useContext, useReducer } from 'react';
import { get } from 'lodash';
import { FormControl, Button, Select, MenuItem, InputLabel, Slider } from '@mui/material';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';
import { Controls } from './ConstructorPalette.style';
import { constructorPaletteReducer } from './ConstructorPalette.reducer';
import { ConstructorPaletteActions as Actions } from './ConstructorPalette.actions';

interface ConstructorPaletteProps {
  onNext: (v: { frame: string; image: string }) => void;
  onBack: () => void;
}

export const ConstructorPalette: FC<ConstructorPaletteProps> = ({ onNext, onBack }) => {
  const {
    source: [file],
    frames,
    palettes,
  } = useContext(ConstructorContext);

  const [{ palette }, dispatch] = useReducer(constructorPaletteReducer, {
    palette: get(palettes, ['0', 'id'], ''),
  });

  const handleOnPaletteChange = (v: string) => {
    dispatch(new Actions.SetPalette(v));
  };

  return (
    <Section>
      <Content style={{ position: 'relative' }}></Content>
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
