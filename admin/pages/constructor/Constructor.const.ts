import { ConstructorStep, ConstructorStepId } from './Constructor.types';

export const CONSTRUCTOR_STEPS: ConstructorStep[] = [
  {
    id: ConstructorStepId.FILE,
    label: 'Choose image',
  },
  {
    id: ConstructorStepId.CROP,
    label: 'Crop image',
  },
  {
    id: ConstructorStepId.PALETTE,
    label: 'Choose palette',
  },
  {
    id: ConstructorStepId.PRESALE,
    label: 'Presale',
  },
];
