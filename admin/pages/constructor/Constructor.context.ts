import { createContext } from 'react';
import { noop } from 'lodash';
import { DTO } from '@admin/api';

interface ConstructorContextProps {
  files: File[];
  frames?: DTO.Query['frames'];
  palettes?: DTO.Query['palettes'];
  onFilesChange: (v: File[]) => void;
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  files: [],
  palettes: [],
  frames: [],
  onFilesChange: noop,
});
