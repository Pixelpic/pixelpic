import React, { useState } from 'react';
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

export default function Constructor() {
  const [step, setStep] = useState<ConstructorStepId>(ConstructorStepId.FILE);
  const [files, onFilesChange] = useState<File[]>([]);

  const { data } = useQuery<DTO.Query>(GET_ALL_FRAMES);

  const activeStep = CONSTRUCTOR_STEPS.findIndex(({ id }) => id === step);

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider
        value={{ files, onFilesChange, frames: data?.frames, palettes: data?.palettes }}
      >
        <Container>
          <Stepper nonLinear activeStep={activeStep}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step key={id} completed={isCompeted[id]({ step, files })}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {step === ConstructorStepId.FILE && (
            <ConstructorFile onNext={() => setStep(ConstructorStepId.CROP)} />
          )}
          {step === ConstructorStepId.CROP && (
            <ConstructorCrop
              onNext={() => setStep(ConstructorStepId.PALETTE)}
              onBack={() => setStep(ConstructorStepId.FILE)}
            />
          )}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
}
