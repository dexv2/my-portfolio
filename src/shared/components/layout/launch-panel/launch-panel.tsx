import React, { Fragment, ReactElement, useEffect } from 'react';
import { ButtonBase } from '@mui/material';

import * as ga from '../../../lib/google-analytics';
import Translation from '../../../data/translation';
import AppSwap from '../../../../assets/svg/visual/app-swap.svg';
import AppPerp from '../../../../assets/svg/visual/app-perp.svg';
import AppZap from '../../../../assets/svg/visual/app-zap.svg';
import CloseIcon from '../../../../assets/svg/icon/close.svg';
import MatrixSwapLogo from '../../../../assets/svg/logo/matrix-swap-white-text-logo.svg';
import MatrixPerpLogo from '../../../../assets/svg/logo/matrix-perp-white-text-logo.svg';
import MatrixZapLogo from '../../../../assets/svg/logo/matrix-zap-white-text-logo.svg';
import { useLaunchPanel } from '../../../context/launch-panel.context';
import { ExternalRoutes } from '../../../pages/routes';
import { MlAppItem } from '../../custom/apps/apps';

export interface MlLaunchPanelProps { }

const MlLaunchApp = ({index = 0, ...item}: MlAppItem) => {
  return (
    <li className={`ml-launch-panel__item${!item.active ? ` ml-launch-panel__item--disable` : ``}`}>
      <div className='ml-launch-panel__item__box' onClick={item.actionFunction}>
        <i className='ml-launch-panel__item__icon'>
          {item.icon}
        </i>
        <i className='ml-launch-panel__item__logo' title={item.name} aria-label={item.name}>
          {item.logo}
        </i>
        <p className='ml-launch-panel__item__description'>
          {item.description}
        </p>
        <ButtonBase 
          className={`ml-button ml-button--alt ml-button--small ml-launch-panel__item__action${!item.active ? ` ml-button--disable` : ``}`} 
          children={item.actionText}
          onClick={item.actionFunction}
        />
      </div>
    </li>
  )
};

function MlLaunchPanel({
  ...props
}: MlLaunchPanelProps): ReactElement {
  const {activeLP, setActiveLP} = useLaunchPanel();
  const appList: MlAppItem[] = [
    {
      active: true,
      icon: <AppSwap />,
      logo: <MatrixSwapLogo />,
      name: Translation.en.section.apps.swap.title,
      description: Translation.en.section.apps.swap.description,
      actionText: Translation.en.common.launchApp,
      actionFunction: () => launchSwap(),
    },
    {
      active: true,
      icon: <AppPerp />,
      logo: <MatrixPerpLogo />,
      name: Translation.en.section.apps.perp.title,
      description: Translation.en.section.apps.perp.description,
      actionText: Translation.en.common.launchApp,
      actionFunction: () => launchPerp(),
    },
    {
      active: false,
      icon: <AppZap />,
      logo: <MatrixZapLogo />,
      name: Translation.en.section.apps.zap.title,
      description: Translation.en.section.apps.zap.description,
      actionText: Translation.en.common.comingSoon,
      actionFunction: () => launchZap(),
    },
  ];

  const closeLaunchPanel = () => {
    setActiveLP(false);
  }

  const launchSwap = () => {
    closeLaunchPanel();
    window.open(ExternalRoutes.Menu.Swap, `_blank`);
    ga.event(`launch_app`, {event_category: `swap`});
  }

  const launchPerp = () => {
    closeLaunchPanel();
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
    ga.event(`launch_app`, {event_category: `perp`});
  }

  const launchZap = () => {
    console.info(`Coming Soon`);
    ga.event(`launch_app`, {event_category: `zap`});
  }

  useEffect(() => {
    document.body.style.overflow = `${activeLP ? `hidden` : `initial`}`;
  }, [activeLP])

  return (
    <Fragment>
      <div className={`ml-section ml-launch-panel${activeLP ? ` ml-launch-panel--active` : ``}`}>
        <i className='ml-launch-panel__close' onClick={() => closeLaunchPanel()}>
          <ButtonBase 
            className='ml-button-icon ml-launch-panel__close__icon' 
            children={<CloseIcon />}
          />
        </i>
        <div className='ml-section__wrap ml-launch-panel__content'>
          <ul className='ml-launch-panel__list'>
            {appList.map((appItem, index) => 
              <MlLaunchApp key={index} index={index} {...appItem} />
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default MlLaunchPanel;
