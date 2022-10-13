import React, { useReducer } from 'react';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { useQuery, useMutation } from '@keystone-6/core/admin-ui/apollo';
import { DTO } from '@admin/api';
import { ConstructorFile } from './ConstructorFile/ConstructorFile';
import { ConstructorCrop } from './ConstructorCrop/ConstructorCrop';
import { ConstructorPalette } from './ConstructorPalette/ConstructorPalette';
import { ConstructorPresale } from './ConstructorPresale/ConstructorPresale';
import { Root, Container, Stepper } from './Constructor.style';
import { CONSTRUCTOR_STEPS } from './Constructor.const';
import { ConstructorStepId } from './Constructor.types';
import { ConstructorContext } from './Constructor.context';
import { isCompeted } from './Constructor.utils';
import { GET_ALL_FRAMES, SAVE_PRESALE, SAVE_IMAGE } from './Constructor.gql';
import { constructorReducer } from './Constructor.reducer';
import { ConstructorActions as Actions } from './Constructor.actions';

export default function Constructor() {
  const { data } = useQuery<DTO.Query>(GET_ALL_FRAMES);

  const [savePresale, { loading: savingPresale, data: presale }] =
    useMutation<DTO.Mutation>(SAVE_PRESALE);

  const [saveImage, { loading: savingImage }] = useMutation<DTO.Mutation>(SAVE_IMAGE);

  const [{ source, step, frame, cropped }, dispatch] = useReducer(constructorReducer, {
    step: ConstructorStepId.FILE,
    source: [],
    cropped: '',
    frame: '',
  });

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

  const handleOnPaletteNext = ({ image }: { image: File }) => {
    saveImage({
      variables: { image },
    })
      .then(({ data }) =>
        savePresale({
          variables: {
            frame,
            image: data?.createImage?.id,
          },
        })
      )
      .then(() => dispatch(new Actions.SetStep(ConstructorStepId.PRESALE)));
  };

  const saving = savingImage || savingPresale;

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider
        value={{
          saving,
          source,
          cropped,
          frame,
          frames: data?.frames,
          palettes: data?.palettes,
          presale: presale?.createPresale,
        }}
      >
        <Container>
          <Stepper nonLinear activeStep={active}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step
                  key={id}
                  completed={isCompeted[id]({
                    step,
                    source: source && !!source.length,
                    frame: !!frame,
                    cropped: !!cropped,
                    presale: !!presale,
                  })}
                >
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
          {step === ConstructorStepId.PRESALE && <ConstructorPresale />}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
}
