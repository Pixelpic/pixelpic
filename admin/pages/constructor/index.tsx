import React, { useState, useReducer } from 'react';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { useQuery, useMutation } from '@keystone-6/core/admin-ui/apollo';
import { DTO } from '@admin/api';
import { PixelItColors } from '../../services';
import { ConstructorFile } from './ConstructorFile/ConstructorFile';
import { ConstructorCrop } from './ConstructorCrop/ConstructorCrop';
import { ConstructorPalette } from './ConstructorPalette/ConstructorPalette';
import { Root, Container, Stepper } from './Constructor.style';
import { CONSTRUCTOR_STEPS } from './Constructor.const';
import { ConstructorStepId } from './Constructor.types';
import { ConstructorContext } from './Constructor.context';
import { isCompeted } from './Constructor.utils';
import { GET_ALL_FRAMES, SAVE_PRESALE } from './Constructor.gql';
import { constructorReducer } from './Constructor.reducer';
import { ConstructorActions as Actions } from './Constructor.actions';

export default function Constructor() {
  const [{ source, step, frame, cropped }, dispatch] = useReducer(constructorReducer, {
    step: ConstructorStepId.FILE,
    source: [],
    cropped: '',
    frame: '',
  });

  const { data } = useQuery<DTO.Query>(GET_ALL_FRAMES);

  const [save, { loading: saving, data: presale }] = useMutation<DTO.Mutation>(SAVE_PRESALE);

  const active = CONSTRUCTOR_STEPS.findIndex(({ id }) => id === step);

  const handleOnFileNext = (v: File[]) => {
    dispatch(new Actions.SetImage(v));
  };

  const handleOnCropNext = ({ frame, image }: { frame: string; image: string }) => {
    dispatch(new Actions.SetCrop(frame, image));
  };

  const handleOnCropPrev = () => {
    dispatch(new Actions.SetStep(ConstructorStepId.FILE));
  };

  const handleOnPalettePrev = () => {
    dispatch(new Actions.SetStep(ConstructorStepId.CROP));
  };

  const handleOnPaletteNext = ({ colors }: { colors: PixelItColors }) => {
    save({
      variables: {
        frame,
        colors: JSON.stringify(colors),
      },
    });
  };

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider
        value={{ saving, source, cropped, frame, frames: data?.frames, palettes: data?.palettes }}
      >
        <Container>
          <Stepper nonLinear activeStep={active}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step key={id} completed={isCompeted[id]({ source, step, frame, cropped })}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {step === ConstructorStepId.FILE && <ConstructorFile onNext={handleOnFileNext} />}
          {step === ConstructorStepId.CROP && (
            <ConstructorCrop onNext={handleOnCropNext} onBack={handleOnCropPrev} />
          )}
          {step === ConstructorStepId.PALETTE && (
            <ConstructorPalette onNext={handleOnPaletteNext} onBack={handleOnPalettePrev} />
          )}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
}
