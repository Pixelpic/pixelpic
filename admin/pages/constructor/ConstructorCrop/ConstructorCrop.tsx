import React, { FC, useContext, useEffect, useState, ChangeEvent } from 'react';
import { get, toNumber, flow } from 'lodash';
import { FormControl, Button, Select, MenuItem, InputLabel, Slider } from '@mui/material';
import Cropper, { Area } from 'react-easy-crop';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';
import { Controls } from './ConstructorCrop.style';
import { Aspect } from './ConstructorCrop.types';
import { DEFAULT_IMAGE } from './ConstructorCrop.const';
import { getCroppedImg } from './ConstructorCrop.utils';

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
  const [aspect, setAspect] = useState<Aspect>([
    get(frames, ['0', 'width']),
    get(frames, ['0', 'height']),
  ]);
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(DEFAULT_IMAGE);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const handleOnAspectChange = (v: string) => {
    const [w, h] = v.split(',').map((v) => toNumber(v));
    setAspect([w, h]);
  };

  const handleOnNext = async () => {
    try {
      if (croppedArea !== null) {
        const croppedImage = await getCroppedImg(image, croppedArea);
        console.log(croppedImage);
      }
      // setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    }).then((v) => typeof v === 'string' && setImage(v));
  }, []);

  return (
    <Section>
      <Content style={{ position: 'relative' }}>
        <Cropper
          showGrid={false}
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect[0] / aspect[1]}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={(_, v) => setCroppedArea(v)}
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
            onChange={(_, value) => typeof value === 'number' && setZoom(value)}
          />
        </Controls>
        <Button variant="contained" onClick={handleOnNext} disableElevation>
          Next
        </Button>
      </Footer>
    </Section>
  );
};
