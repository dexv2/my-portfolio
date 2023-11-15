import React, { createContext, useState } from 'react';

type NotificationBarContextProps = {activeNB: boolean; setActiveNB: (active: boolean) => void} | undefined;
type NotificationBarProviderProps = {children: React.ReactNode};

export const NotificationBarContext = createContext<NotificationBarContextProps>(undefined)

export const NotificationBarProvider = ({children}: NotificationBarProviderProps) => {
  const [activeNB, setActiveNB] = useState(false);
  return (
    <NotificationBarContext.Provider value={{activeNB, setActiveNB}}>
      {children}
    </NotificationBarContext.Provider>
  );
};

export const useNotificationBar = () => {
  const context = React.useContext(NotificationBarContext)
  if (context === undefined) {
    throw new Error('useNotificationBar must be used within a NotificationBarProvider')
  }
  return context
}