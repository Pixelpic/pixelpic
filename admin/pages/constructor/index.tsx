import React, { useState } from 'react';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { Root, Container, Stepper } from './Constructor.style';
import { CONSTRUCTOR_STEPS } from './Constructor.const';
import { ConstructorStepId } from './Constructor.types';
import { ConstructorContext } from './Constructor.context';
import { ConstructorFile } from './ConstructorFile/ConstructorFile';

export default function Constructor() {
  const [step, setStep] = useState<ConstructorStepId>(ConstructorStepId.FILE);
  const [file, onFileChange] = useState<File[]>([]);

  const activeStep = CONSTRUCTOR_STEPS.findIndex(({ id }) => id === step);

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider value={{ file, onFileChange }}>
        <Container>
          <Stepper nonLinear activeStep={activeStep}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step key={id}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {step === ConstructorStepId.FILE && <ConstructorFile onNext={() => setStep(ConstructorStepId.CROP)} />}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
}
