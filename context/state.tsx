import { createContext, useContext, useState } from 'react';
import { PROJECTS } from '../lib/consts';

const AppContext = createContext<any>({}),
  sharedState = PROJECTS;

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ sharedState, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
