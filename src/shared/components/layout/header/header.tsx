import React, { ReactElement, useEffect } from 'react';
import { ButtonBase } from '@mui/material';
import Link from 'next/link';

import MlMenu from '../menu/menu';
import Translation from '../../../data/translation';
import MatrixLabsIcon from '../../../../assets/svg/logo/matrixlabs-icon.svg';
import VLogo from '../../../../assets/svg/logo/v-logo.svg';
import MatrixLabsTextMatrix from '../../../../assets/svg/logo/matrixlabs-matrix.svg';
import MatrixLabsTextLabs from '../../../../assets/svg/logo/matrixlabs-labs.svg';
import { animFadeIn } from '../../../config/anim';
import { ExternalRoutes, Routes } from '../../../pages/routes';
import { useLaunchPanel } from '../../../context/launch-panel.context';
import { useNotificationBar } from '../../../context/notification-bar.context';

export interface MlHeaderProps { }

function MlHeader({
  ...props
}: MlHeaderProps): ReactElement {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e: Event) => {
    const header = document.querySelector('.ml-header');
    const scrollTop = window.scrollY;
    if (header) {
      if (scrollTop > 20) {
        header.classList.add('ml-header--sticky')
      } else {
        header.classList.remove('ml-header--sticky');
      } 

      if (scrollTop > 350) {
        header.classList.add('ml-header--sticky--heading')
      } else {
        header.classList.remove('ml-header--sticky--heading');
      } 
    }
  };

  function goToFile() {
    window.open(ExternalRoutes.Menu.Cv, `_blank`);
  }

  return (
    <div className='ml-section ml-header'>
      <div className='ml-header__bg'>
        <div className='ml-section__wrap ml-header__content'>
          <div className='ml-header__logo'>
            <Link href={Routes.Menu.Home}>
              <div className='ml-header__logo__box'>
                <VLogo className='ml-header__logo__svg ml-header__logo__svg--icon' aria-label={Translation.en.meta.title} />
                <span className='ml-header__logo__no-width'>
                  <span className='ml-header__logo__hide-narrow ml-header__logo__hide-narrow--portfolio'>
                    <h1 className='ml-title--heading ml-header__logo__svg--text-my'>MY</h1>
                    <h1 className='ml-title--heading ml-header__logo__svg--text-portfolio'>PORTFOLIO</h1>
                  </span>
                </span>
                <span className='ml-header__logo__hide-narrow ml-header__logo__hide-narrow--name'>
                  <h1 className='ml-title--heading ml-header__logo__svg--text-vermont'>VERMONT PHIL</h1>
                  <h1 className='ml-title--heading ml-header__logo__svg--text-paguiligan'>PAGUILIGAN</h1>
                </span>
              </div>
            </Link>
          </div>
          <div className='ml-header__menu'{...animFadeIn()}>
            <MlMenu />
          </div>
          <div className='ml-header__action'>
            <ButtonBase 
              className='ml-button ml-button--alt ml-button--small ml-button--launch' 
              children={Translation.en.common.download}
              onClick={goToFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlHeader;
