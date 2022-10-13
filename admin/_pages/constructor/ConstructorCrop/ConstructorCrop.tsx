import React, { FC, useContext, useEffect, useState, ChangeEvent, useReducer } from 'react';
import { get } from 'lodash';
import { FormControl, Button, Select, MenuItem, InputLabel, Slider } from '@mui/material';
import Cropper from 'react-easy-crop';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';
import { Controls } from './ConstructorCrop.style';
import { ConstructorCropArea, ConstructorCropPoint } from './ConstructorCrop.types';
import { DEFAULT_IMAGE } from './ConstructorCrop.const';
import { getCroppedImg } from './ConstructorCrop.utils';
import { constructorCropReducer } from './ConstructorCrop.reducer';
import { ConstructorCropActions as Actions } from './ConstructorCrop.actions';

interface ConstructorCropProps {
  onNext: (v: { frame: string; image: string }) => void;
  onBack: () => void;
}

export const ConstructorCrop: FC<ConstructorCropProps> = ({ onNext, onBack }) => {
  const {
    frame: selected,
    source: [file],
    frames,
  } = useContext(ConstructorContext);

  const [{ crop, frame, source, area, zoom }, dispatch] = useReducer(constructorCropReducer, {
    zoom: 1,
    area: null,
    source: DEFAULT_IMAGE,
    frame: selected || get(frames, ['0', 'id'], ''),
    crop: { x: 0, y: 0 },
  });

  const { horizontal = 0, vertical = 0 } = frames?.find(({ id }) => id === frame) || {};

  const handleOnAspectChange = (v: string) => {
    dispatch(new Actions.SetFrame(v));
  };

  const handleOnNext = async () => {
    try {
      if (area !== null) {
        const image = await getCroppedImg(source, area);
        if (typeof image === 'string') onNext({ frame, image });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handelOnZoom = (v: number) => {
    dispatch(new Actions.SetZoom(v));
  };

  const handleOnCropComplete = (v: ConstructorCropArea) => {
    dispatch(new Actions.SetArea(v));
  };

  const handleOnCropChange = (v: ConstructorCropPoint) => {
    dispatch(new Actions.SetCrop(v));
  };

  useEffect(() => {
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    }).then((v) => typeof v === 'string' && dispatch(new Actions.SetSource(v)));
  }, []);

  return (
    <Section>
      <Content style={{ position: 'relative' }}>
        <Cropper
          showGrid={false}
          image={source}
          crop={crop}
          zoom={zoom}
          aspect={horizontal && vertical ? horizontal / vertical : undefined}
          onCropChange={handleOnCropChange}
          onZoomChange={handelOnZoom}
          onCropComplete={(_, v) => handleOnCropComplete(v)}
        />
      </Content>
      <Footer justify="space-between">
        <Button variant="outlined" onClick={onBack} disableElevation>
          Back
        </Button>
        <Controls>
          <FormControl size="small">
            <InputLabel>Size</InputLabel>
            <Select
              value={frame}
              label="Size"
              onChange={({ target: { value } }) => handleOnAspectChange(value)}
            >
              {frames?.map(({ id, name, horizontal, vertical }) => {
                return (
                  <MenuItem key={id} value={id}>
                    {name} ({horizontal}x{vertical})
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            size="small"
            defaultValue={50}
            onChange={(_, value) => typeof value === 'number' && handelOnZoom(value)}
          />
        </Controls>
        <Button variant="contained" onClick={handleOnNext} disableElevation>
          Next
        </Button>
      </Footer>
    </Section>
  );
};
