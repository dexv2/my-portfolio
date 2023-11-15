import React, { ReactElement, useEffect } from 'react';

import * as ga from '../../../lib/google-analytics';
import Translation from '../../../data/translation';
import CloseIcon from '../../../../assets/svg/icon/close.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { useNotificationBar } from '../../../context/notification-bar.context';

export type MlNotificationBarProps = { }

function MlNotificationBar({ 
  ...props 
}: MlNotificationBarProps): ReactElement {
  const {activeNB, setActiveNB} = useNotificationBar();
  const closeNotification = () => {
    localStorage.setItem(`isNotificationBarClosedByUser`, `true`);
    setActiveNB(false);
  }
  const actionOnNotification = () => {
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
    ga.event(`launch_app`, {event_category: `perp-notification`});
  }
  useEffect(() => {
    const isClosedByUser = localStorage.getItem(`isNotificationBarClosedByUser`) === `true`;
    if (!isClosedByUser) setActiveNB(true)
  }, [])
  return (
    <div className={`ml-section ml-notification-bar${activeNB ? ` ml-notification-bar--active` : ``}`}>
      <div className='ml-notification-bar__bg'></div>
      <div 
        className='ml-section__wrap ml-notification-bar__content' 
        onClick={actionOnNotification}
      >
        {Translation.en.section.notificationBar.text}
      </div>
      <CloseIcon 
        className='ml-notification-bar__close' 
        onClick={closeNotification} 
      />
    </div>
  );
}

export default MlNotificationBar;
