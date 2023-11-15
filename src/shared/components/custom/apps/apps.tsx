import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

// import * as ga from '../../../lib/google-analytics';
import Translation from '../../../data/translation';
import AppSwap from '../../../../assets/svg/visual/app-swap.svg';
import AppPerp from '../../../../assets/svg/visual/app-perp.svg';
import AppZap from '../../../../assets/svg/visual/app-zap.svg';
import MatrixSwapLogo from '../../../../assets/svg/logo/matrix-swap-white-text-logo.svg';
import MatrixPerpLogo from '../../../../assets/svg/logo/matrix-perp-white-text-logo.svg';
import MatrixZapLogo from '../../../../assets/svg/logo/matrix-zap-white-text-logo.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlAppsProps = { }

export type MlAppItem = {
  active: boolean;
  index?: number;
  icon: ReactElement;
  logo: ReactElement;
  name: string;
  description: string;
  actionText: string;
  actionFunction: () => void,
}

const MlApp = ({index = 0, ...item}: MlAppItem) => {
  return (
    <li className='ml-apps__item' {...animSlideUp()}>
      <div className='ml-card ml-apps__card' onClick={item.actionFunction}>
        <i className='ml-apps__item__icon' {...animSlideOut()}>
          {item.icon}
        </i>
        <i className='ml-apps__item__logo' title={item.name} aria-label={item.name}>
          {item.logo}
        </i>
        <p className='ml-apps__item__description'>
          {item.description}
        </p>
        <ButtonBase 
          className={`ml-button ml-button--small ml-apps__item__action${!item.active ? ` ml-button--disable` : ``}`}
          children={item.actionText}
          onClick={item.actionFunction}
        />
      </div>
    </li>
  )
};

function MlApps({ 
  ...props 
}: MlAppsProps): ReactElement {

  const appList: MlAppItem[] = [
    {
      active: true,
      icon: <AppSwap />,
      logo: <MlAppTitle content="MATRIX SWAP"/>,
      name: Translation.en.section.apps.swap.title,
      description: Translation.en.section.apps.swap.description,
      actionText: Translation.en.section.apps.swap.action,
      actionFunction: () => launchSwap(),
    },
    {
      active: true,
      icon: <AppPerp />,
      logo: <MlAppTitle content="MATRIX PERP"/>,
      name: Translation.en.section.apps.perp.title,
      description: Translation.en.section.apps.perp.description,
      actionText: Translation.en.section.apps.perp.action,
      actionFunction: () => launchPerp(),
    },
    {
      active: true,
      icon: <AppZap />,
      logo: <MlAppTitle content="ESCROW PAYMENT"/>,
      name: Translation.en.section.apps.escrow.title,
      description: Translation.en.section.apps.escrow.description,
      actionText: Translation.en.section.apps.escrow.action,
      actionFunction: () => launchZap(),
    },
  ];

  const launchSwap = () => {
    window.open(ExternalRoutes.Menu.Swap, `_blank`);
  }

  const launchPerp = () => {
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
  }

  const launchZap = () => {
    window.open(ExternalRoutes.Menu.Escrow, `_blank`);
  }

  return (
    <>
      <div id='projects'></div>
      <div className='ml-section ml-apps' data-aos='fade-in'>
        <div className='ml-section__wrap ml-apps__content'>
          <h2 className='ml-section__title ml-apps__title' {...animSlideOut()}>
            {Translation.en.section.apps.title}
          </h2>
          <ul className='ml-apps__list'>
            {appList.map((appItem, index) => 
              <MlApp key={index} index={index} {...appItem} />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

function MlAppTitle(props: {content: string}) {
  const title: string[] = props.content.split(" ");
  return (
    <div className='title-container'>
      {title.map((t, i) => (
        <span key={i} className='ml-title--card'>{t}</span>
      ))}
    </div>
  );
}

export default MlApps;