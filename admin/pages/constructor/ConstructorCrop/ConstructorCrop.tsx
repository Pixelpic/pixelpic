import React, { FC, useContext, useEffect, useState, ChangeEvent, useReducer } from 'react';
import { get, toNumber } from 'lodash';
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
  onNext: () => void;
  onBack: () => void;
}

export const ConstructorCrop: FC<ConstructorCropProps> = ({ onNext, onBack }) => {
  const {
    files: [file],
    frames,
    onFilesChange,
  } = useContext(ConstructorContext);

  const [{ crop, aspect, source, area, zoom }, dispatch] = useReducer(constructorCropReducer, {
    zoom: 1,
    area: null,
    source: DEFAULT_IMAGE,
    aspect: [get(frames, ['0', 'width']), get(frames, ['0', 'height'])],
    crop: { x: 0, y: 0 },
  });

  const handleOnAspectChange = (v: string) => {
    const [w, h] = v.split(',').map((v) => toNumber(v));
    dispatch(new Actions.SetAspect([w, h]));
  };

  const handleOnNext = async () => {
    try {
      if (area !== null) {
        const croppedImage = await getCroppedImg(source, area);
        console.log(croppedImage);
      }
      // setCroppedImage(croppedImage);
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
          aspect={aspect[0] / aspect[1]}
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
              value={aspect.join(',')}
              label="Age"
              onChange={({ target: { value } }) => handleOnAspectChange(value)}
            >
              {frames?.map(({ id, name, width, height }) => {
                return (
                  <MenuItem key={id} value={[width, height].join(',')}>
                    {name} ({width}x{height})
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
