import { createContext } from 'react';
import { DTO } from '@admin/api';
import { ConstructorStepId, ConstructorState } from './Constructor.types';

interface ConstructorContextProps extends ConstructorState {
  saving: boolean;
  frames?: DTO.Query['frames'];
  palettes?: DTO.Query['palettes'];
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  step: ConstructorStepId.FILE,
  saving: false,
  source: [],
  palettes: [],
  frames: [],
});
