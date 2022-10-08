import { ConstructorStepId } from './Constructor.types';
import { ConstructorState } from './Constructor.reducer';

type IsCompleted = (params: Partial<ConstructorState>) => boolean;

export const isCompeted: Record<ConstructorStepId, IsCompleted> = {
  [ConstructorStepId.FILE]: ({ step, source }) =>
    step !== ConstructorStepId.FILE && !!source && !!source.length,
  [ConstructorStepId.CROP]: ({ step, frame, crop }) =>
    step !== ConstructorStepId.CROP && !!frame && !!crop,
  [ConstructorStepId.PALETTE]: () => false,
};
