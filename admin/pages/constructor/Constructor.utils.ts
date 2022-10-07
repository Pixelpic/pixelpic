import { ConstructorStepId } from './Constructor.types';

interface IsCompletedParams {
  step: ConstructorStepId;
  files: File[];
}

type IsCompleted = (params: IsCompletedParams) => boolean;

export const isCompeted: Record<ConstructorStepId, IsCompleted> = {
  [ConstructorStepId.FILE]: ({ step, files }) => step !== ConstructorStepId.FILE && !!files.length,
  [ConstructorStepId.CROP]: () => false,
  [ConstructorStepId.PALETTE]: () => false,
};
