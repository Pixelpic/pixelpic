import {} from './Constructor.const';

export enum ConstructorStepId {
  FILE = 'file',
  CROP = 'crop',
  PALETTE = 'palette',
  PRESALE = 'presale',
}

export interface ConstructorStep {
  id: ConstructorStepId;
  label: string;
}
