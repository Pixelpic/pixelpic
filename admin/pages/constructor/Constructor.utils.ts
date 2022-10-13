import { ConstructorStepId } from './Constructor.types';
import { ConstructorState } from './Constructor.reducer';

interface IsCompletedParams {
  step: ConstructorStepId;
  source: boolean;
  frame: boolean;
  cropped: boolean;
  presale: boolean;
}

type IsCompleted = (params: IsCompletedParams) => boolean;

export const isCompeted: Record<ConstructorStepId, IsCompleted> = {
  [ConstructorStepId.FILE]: ({ step, source }) => step !== ConstructorStepId.FILE && source,
  [ConstructorStepId.CROP]: ({ step, frame, cropped }) =>
    step !== ConstructorStepId.CROP && frame && cropped,
  [ConstructorStepId.PALETTE]: ({ step, presale }) => step !== ConstructorStepId.PALETTE && presale,
  [ConstructorStepId.PRESALE]: () => false,
};
