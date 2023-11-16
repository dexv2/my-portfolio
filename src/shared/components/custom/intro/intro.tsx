import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Translation from '../../../data/translation';
import IntroVisual from '../../../../assets/svg/visual/intro.svg';
import IntroSpiral from '../../../../assets/image/visual/intro.png';
import Arrow from '../../../../assets/svg/icon/arrow.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animZoomOut, animFadeIn } from '../../../config/anim';

export type MlIntroProps = {
  userAgent: string;
}

function MlIntro({ 
  userAgent,
  ...props 
}: MlIntroProps): ReactElement {

  function goToGithub() {
    window.open(ExternalRoutes.Social.Github, `_blank`);
  }

  return (
    <div id='home' className='vp-section vp-intro'>
      <div className='vp-section__wrap vp-intro__content'>
        <div className='vp-intro__visual' {...animFadeIn()}>
          {[`Firefox`].some(x => userAgent.includes(x)) ? 
            <Image 
              src={IntroSpiral} 
              alt='Intro' 
              layout='fill' 
              loading='eager' 
              placeholder='blur' 
              quality={100}
              className='vp-intro__visual__vortex'
            />
          :
            <IntroVisual className='vp-intro__visual__vortex'/>
          }
        </div>
        <div className='vp-intro__box' {...animZoomOut()}>
          <h1 className='vp-intro__title vp-typo--highlight'>
            {Translation.en.section.intro.title}
          </h1>
          <p className='vp-intro__description'>
            {Translation.en.section.intro.description}
          </p>
          <div className='vp-intro__action'>
            <Link href={ExternalRoutes.Social.Gmail}>
              <ButtonBase 
                className='vp-button' 
                children={Translation.en.common.getInTouch}
              />
            </Link>
            <ButtonBase className='vp-button vp-button--alt' onClick={goToGithub}>
              {Translation.en.common.viewGithub} 
              <Arrow className='vp-button__icon' />
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlIntro;
