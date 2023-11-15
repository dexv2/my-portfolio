import React from 'react';

import { LaunchPanelProvider } from './launch-panel.context';
import { NotificationBarProvider } from './notification-bar.context';

export type ContextProviderProps = {children: React.ReactNode};

const ContextProvider = ({children}: ContextProviderProps) => {
  return (
    <LaunchPanelProvider>
    <NotificationBarProvider>
      {children}
    </NotificationBarProvider>
    </LaunchPanelProvider>
  );
};

export default ContextProvider;
