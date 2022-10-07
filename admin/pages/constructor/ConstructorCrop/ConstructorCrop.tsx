import React, { FC, useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import Cropper from 'react-easy-crop';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';

interface ConstructorCropProps {
  onNext: () => void;
  onBack: () => void;
}

export const ConstructorCrop: FC<ConstructorCropProps> = ({ onNext, onBack }) => {
  const { files, onFilesChange } = useContext(ConstructorContext);

  return (
    <Section>
      <Content>{/* <Cropper /> */}</Content>
      <Footer justify="space-between">
        <Button variant="outlined" onClick={onBack} disableElevation>
          Back
        </Button>
        <div>123</div>
        <Button disabled={!files.length} variant="contained" onClick={onNext} disableElevation>
          Next
        </Button>
      </Footer>
    </Section>
  );
};
