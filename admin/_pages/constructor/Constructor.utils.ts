import { ConstructorStepId } from './Constructor.types';
import { ConstructorState } from './Constructor.types';

type IsCompleted = (params: ConstructorState) => boolean;

export const isCompeted: Record<ConstructorStepId, IsCompleted> = {
  [ConstructorStepId.FILE]: ({ step, source }) =>
    step !== ConstructorStepId.FILE && !!source?.length,
  [ConstructorStepId.CROP]: ({ step, frame, cropped }) =>
    step !== ConstructorStepId.CROP && !!frame && !!cropped,
  [ConstructorStepId.PALETTE]: ({ step, presale }) =>
    step !== ConstructorStepId.PALETTE && !!presale,
  [ConstructorStepId.PRESALE]: () => false,
};
