import { createContext } from 'react';
import { DTO } from '@admin/api';

interface ConstructorContextProps {
  saving: boolean;
  source: File[];
  cropped: string;
  frame: string;
  frames?: DTO.Query['frames'];
  palettes?: DTO.Query['palettes'];
  presale?: DTO.Query['presale'];
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  saving: false,
  cropped: '',
  frame: '',
  source: [],
  palettes: [],
  frames: [],
});
