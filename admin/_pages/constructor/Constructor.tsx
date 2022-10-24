import React, { useReducer, FC } from 'react';
import { Heading } from '@keystone-ui/core';
import { Step, StepLabel } from '@mui/material';
import { useQuery, useMutation } from '@keystone-6/core/admin-ui/apollo';
import { DTO } from '@admin/api';
import { ConstructorFile } from './ConstructorFile/ConstructorFile';
import { ConstructorCrop } from '../../_pages/constructor/ConstructorCrop/ConstructorCrop';
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

export const Constructor: FC = () => {
  const { data } = useQuery<DTO.Query>(GET_ALL_FRAMES);

  const [savePresale, { loading: savingPresale, data: presale }] =
    useMutation<DTO.Mutation>(SAVE_PRESALE);

  const [saveImage, { loading: savingImage }] = useMutation<DTO.Mutation>(SAVE_IMAGE);

  const [state, dispatch] = useReducer(constructorReducer, {
    step: ConstructorStepId.FILE,
    source: [],
  });

  const active = CONSTRUCTOR_STEPS.findIndex(({ id }) => id === state.step);

  const handleOnFileNext = (source: File[]) => {
    dispatch(
      new Actions.SetState({
        source,
        step: ConstructorStepId.CROP,
      })
    );
  };

  const handleOnCropNext = ({ frame, image }: { frame: string; image: string }) => {
    dispatch(
      new Actions.SetState({
        frame,
        cropped: image,
        step: ConstructorStepId.PALETTE,
      })
    );
  };

  const handleOnPaletteNext = ({ image }: { image: File }) => {
    if (!state.source?.length) return;
    saveImage({
      variables: { image, name: state.source[0].name },
    })
      .then(({ data }) =>
        savePresale({
          variables: {
            frame: state.frame,
            image: data?.createImage?.id,
          },
        })
      )
      .then(({ data }) =>
        dispatch(
          new Actions.SetState({
            step: ConstructorStepId.PRESALE,
            presale: data?.createPresale?.id,
          })
        )
      );
  };

  const handleOnCropPrev = () => {
    dispatch(
      new Actions.SetState({
        step: ConstructorStepId.FILE,
        cropped: undefined,
        frame: undefined,
      })
    );
  };

  const handleOnPalettePrev = () => {
    dispatch(
      new Actions.SetState({
        step: ConstructorStepId.CROP,
      })
    );
  };

  const saving = savingImage || savingPresale;

  return (
    <Root header={<Heading type="h3">Constructor</Heading>}>
      <ConstructorContext.Provider
        value={{
          saving,
          frames: data?.frames,
          palettes: data?.palettes,
          ...state,
        }}
      >
        <Container>
          <Stepper nonLinear activeStep={active}>
            {CONSTRUCTOR_STEPS.map(({ label, id }) => {
              return (
                <Step key={id} completed={isCompeted[id](state)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {state.step === ConstructorStepId.FILE && <ConstructorFile onNext={handleOnFileNext} />}
          {state.step === ConstructorStepId.CROP && (
            <ConstructorCrop onNext={handleOnCropNext} onBack={handleOnCropPrev} />
          )}
          {state.step === ConstructorStepId.PALETTE && (
            <ConstructorPalette onNext={handleOnPaletteNext} onBack={handleOnPalettePrev} />
          )}
          {state.step === ConstructorStepId.PRESALE && <ConstructorPresale />}
        </Container>
      </ConstructorContext.Provider>
    </Root>
  );
};
