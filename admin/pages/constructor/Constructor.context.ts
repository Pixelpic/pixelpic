import { createContext } from 'react';
import { noop } from 'lodash';
import { DTO } from '@admin/api';

interface ConstructorContextProps {
  source: File[];
  cropped: string;
  frame: string;
  frames?: DTO.Query['frames'];
  palettes?: DTO.Query['palettes'];
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  cropped: '',
  frame: '',
  source: [],
  palettes: [],
  frames: [],
});
