import React, { createContext, useState } from 'react';

type LaunchPanelContextProps = {activeLP: boolean; setActiveLP: (active: boolean) => void} | undefined;
type LaunchPanelProviderProps = {children: React.ReactNode};

export const LaunchPanelContext = createContext<LaunchPanelContextProps>(undefined)

export const LaunchPanelProvider = ({children}: LaunchPanelProviderProps) => {
  const [activeLP, setActiveLP] = useState(false);
  return (
    <LaunchPanelContext.Provider value={{activeLP, setActiveLP}}>
      {children}
    </LaunchPanelContext.Provider>
  );
};

export const useLaunchPanel = () => {
  const context = React.useContext(LaunchPanelContext)
  if (context === undefined) {
    throw new Error('useLaunchPanel must be used within a LaunchPanelProvider')
  }
  return context
}