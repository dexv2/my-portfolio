import React, { ReactElement, useEffect } from 'react';
import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import VpMenu from '../menu/menu';
import Translation from '../../../data/translation';
import VLogo from '../../../../assets/svg/logo/v-logo.svg';
import { animFadeIn } from '../../../config/anim';
import { ExternalRoutes, Routes } from '../../../pages/routes';

function VpHeader(): ReactElement {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e: Event) => {
    const header = document.querySelector('.vp-header');
    const scrollTop = window.scrollY;
    if (header) {
      if (scrollTop > 20) {
        header.classList.add('vp-header--sticky')
      } else {
        header.classList.remove('vp-header--sticky');
      } 

      if (scrollTop > 350) {
        header.classList.add('vp-header--sticky--heading')
      } else {
        header.classList.remove('vp-header--sticky--heading');
      } 
    }
  };

  function goToFile() {
    window.open(ExternalRoutes.Menu.Cv, `_blank`);
  }

  return (
    <div className='vp-section vp-header'>
      <div className='vp-header__bg'>
        <div className='vp-section__wrap vp-header__content'>
          <div className='vp-header__logo'>
            <Link href={Routes.Menu.Home}>
              <div className='vp-header__logo__box'>
                <VLogo className='vp-header__logo__svg vp-header__logo__svg--icon' aria-label={Translation.en.meta.title} />
                <span className='vp-header__logo__no-width'>
                  <span className='vp-header__logo__hide-narrow vp-header__logo__hide-narrow--portfolio'>
                    <h1 className='vp-title--heading vp-header__logo__svg--text-my'>{Translation.en.label.my}</h1>
                    <h1 className='vp-title--heading vp-header__logo__svg--text-portfolio'>{Translation.en.label.portfolio}</h1>
                  </span>
                </span>
                <span className='vp-header__logo__hide-narrow vp-header__logo__hide-narrow--name'>
                  <h1 className='vp-title--heading vp-header__logo__svg--text-vermont'>{Translation.en.label.fname}</h1>
                  <h1 className='vp-title--heading vp-header__logo__svg--text-paguiligan'>{Translation.en.label.lname}</h1>
                </span>
              </div>
            </Link>
          </div>
          <div className='vp-header__menu'{...animFadeIn()}>
            <VpMenu />
          </div>
          <div className='vp-header__action'>
            <ButtonBase 
              className='vp-button vp-button--alt vp-button--small vp-button--launch' 
              children={Translation.en.common.download}
              onClick={goToFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VpHeader;
