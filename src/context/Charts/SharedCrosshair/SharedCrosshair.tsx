import { createContext, ReactNode, useState } from 'react';

import { defaultValues } from './constants';
import { SharedCrosshairContextProps } from './types';

const SharedCrosshairContext =
  createContext<SharedCrosshairContextProps>(defaultValues);

const SharedCrosshairProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<number | undefined>(undefined);

  const updateCrosshair = (value: number) => setPosition(value);

  return (
    <SharedCrosshairContext.Provider value={{ position, updateCrosshair }}>
      {children}
    </SharedCrosshairContext.Provider>
  );
};

export { SharedCrosshairProvider, SharedCrosshairContext };
