import {} from './Constructor.const';

export enum ConstructorStepId {
  FILE = 'file',
  CROP = 'crop',
  PALETTE = 'palette',
}

export interface ConstructorStep {
  id: ConstructorStepId;
  label: string;
}
