import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';
import Translation from '../../../data/translation';
import AppSwap from '../../../../assets/svg/visual/app-swap.svg';
import AppPerp from '../../../../assets/svg/visual/app-perp.svg';
import AppEscrow from '../../../../assets/svg/visual/app-escrow.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type VpAppsProps = { }

export type VpAppItem = {
  active: boolean;
  index?: number;
  icon: ReactElement;
  logo: ReactElement;
  name: string;
  description: string;
  actionText: string;
  actionFunction: () => void,
}

const VpApp = ({index = 0, ...item}: VpAppItem) => {
  return (
    <li className='vp-apps__item' {...animSlideUp()}>
      <div className='vp-card vp-apps__card' onClick={item.actionFunction}>
        <i className='vp-apps__item__icon' {...animSlideOut()}>
          {item.icon}
        </i>
        <i className='vp-apps__item__logo' title={item.name} aria-label={item.name}>
          {item.logo}
        </i>
        <p className='vp-apps__item__description'>
          {item.description}
        </p>
        <ButtonBase 
          className={`vp-button vp-button--small vp-apps__item__action${!item.active ? ` vp-button--disable` : ``}`}
          children={item.actionText}
          onClick={item.actionFunction}
        />
      </div>
    </li>
  )
};

function VpApps({ 
  ...props 
}: VpAppsProps): ReactElement {

  const appList: VpAppItem[] = [
    {
      active: true,
      icon: <AppSwap />,
      logo: <VpAppTitle content={Translation.en.projects.swap}/>,
      name: Translation.en.section.apps.swap.title,
      description: Translation.en.section.apps.swap.description,
      actionText: Translation.en.section.apps.swap.action,
      actionFunction: () => launchSwap(),
    },
    {
      active: true,
      icon: <AppPerp />,
      logo: <VpAppTitle content={Translation.en.projects.perp}/>,
      name: Translation.en.section.apps.perp.title,
      description: Translation.en.section.apps.perp.description,
      actionText: Translation.en.section.apps.perp.action,
      actionFunction: () => launchPerp(),
    },
    {
      active: true,
      icon: <AppEscrow />,
      logo: <VpAppTitle content={Translation.en.projects.escrow}/>,
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
      <div className='vp-section vp-apps' data-aos='fade-in'>
        <div className='vp-section__wrap vp-apps__content'>
          <h2 className='vp-section__title vp-apps__title' {...animSlideOut()}>
            {Translation.en.section.apps.title}
          </h2>
          <ul className='vp-apps__list'>
            {appList.map((appItem, index) => 
              <VpApp key={index} index={index} {...appItem} />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

function VpAppTitle(props: {content: string}) {
  const title: string[] = props.content.split(" ");
  return (
    <div className='title-container'>
      {title.map((t, i) => (
        <span key={i} className='vp-title--card'>{t}</span>
      ))}
    </div>
  );
}

export default VpApps;
