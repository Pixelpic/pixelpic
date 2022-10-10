import { ConstructorStepId } from './Constructor.types';
import { ConstructorState } from './Constructor.reducer';

type IsCompleted = (params: Partial<ConstructorState>) => boolean;

export const isCompeted: Record<ConstructorStepId, IsCompleted> = {
  [ConstructorStepId.FILE]: ({ step, source }) =>
    step !== ConstructorStepId.FILE && !!source && !!source.length,
  [ConstructorStepId.CROP]: ({ step, frame, cropped }) =>
    step !== ConstructorStepId.CROP && !!frame && !!cropped,
  [ConstructorStepId.PALETTE]: () => false,
  [ConstructorStepId.PRESALE]: () => false,
};
