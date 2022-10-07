import { createContext } from 'react';
import { noop } from 'lodash';

interface ConstructorContextProps {
  files: File[];
  onFilesChange: (v: File[]) => void;
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  files: [],
  onFilesChange: noop,
});
