import { createContext } from 'react';
import { noop } from 'lodash';

interface ConstructorContextProps {
  file: File[];
  onFileChange: (v: File[]) => void;
}

export const ConstructorContext = createContext<ConstructorContextProps>({
  file: [],
  onFileChange: noop,
});
