import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { Root, Container, Stepper, Content } from './Constructor.style';
import { CONSTRUCTOR_STEPS } from './Constructor.const';
import { ConstructorStepId } from './Constructor.types';

export default function Constructor() {
  const [step, setStep] = useState<ConstructorStepId>(ConstructorStepId.FILE);

  const activeStep = CONSTRUCTOR_STEPS.findIndex(({ id }) => id === step);

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
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
        <Content>
          <Button>123</Button>
        </Content>
      </Container>
    </Root>
  );
}
