import React, { useState, useReducer } from 'react';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { useQuery } from '@keystone-6/core/admin-ui/apollo';
import { DTO } from '@admin/api';
import { ConstructorFile } from './ConstructorFile/ConstructorFile';
import { ConstructorCrop } from './ConstructorCrop/ConstructorCrop';
import { Root, Container, Stepper } from './Constructor.style';
import { CONSTRUCTOR_STEPS } from './Constructor.const';
import { ConstructorStepId } from './Constructor.types';
import { ConstructorContext } from './Constructor.context';
import { isCompeted } from './Constructor.utils';
import { GET_ALL_FRAMES } from './Constructor.gql';
import { constructorReducer } from './Constructor.reducer';
import { ConstructorActions as Actions } from './Constructor.actions';

export default function Constructor() {
  const [, setStep] = useState<ConstructorStepId>(ConstructorStepId.FILE);
  const [{ source, step, frame, crop }, dispatch] = useReducer(constructorReducer, {
    step: ConstructorStepId.FILE,
    source: [],
    crop: '',
    frame: '',
  });

  const { data } = useQuery<DTO.Query>(GET_ALL_FRAMES);

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

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider
        value={{ source, frames: data?.frames, palettes: data?.palettes }}
      >
        <Container>
          <Stepper nonLinear activeStep={active}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step key={id} completed={isCompeted[id]({ source, step, frame, crop })}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {step === ConstructorStepId.FILE && <ConstructorFile onNext={handleOnFileNext} />}
          {step === ConstructorStepId.CROP && (
            <ConstructorCrop onNext={handleOnCropNext} onBack={handleOnCropPrev} />
          )}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
}
