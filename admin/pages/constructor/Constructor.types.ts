import { DTO } from '@admin/api';

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

export interface ConstructorState {
  step: ConstructorStepId;
  source?: File[];
  cropped?: string;
  frame?: string;
  presale?: string;
}
