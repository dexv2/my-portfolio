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
    <div id='home' className='ml-section ml-intro'>
      <div className='ml-section__wrap ml-intro__content'>
        <div className='ml-intro__visual' {...animFadeIn()}>
          {[`Firefox`].some(x => userAgent.includes(x)) ? 
            <Image 
              src={IntroSpiral} 
              alt='Intro' 
              layout='fill' 
              loading='eager' 
              placeholder='blur' 
              quality={100}
              className='ml-intro__visual__vortex'
            />
          :
            <IntroVisual className='ml-intro__visual__vortex'/>
          }
        </div>
        <div className='ml-intro__box' {...animZoomOut()}>
          <h1 className='ml-intro__title ml-typo--highlight'>
            {Translation.en.section.intro.title}
          </h1>
          <p className='ml-intro__description'>
            {Translation.en.section.intro.description}
          </p>
          <div className='ml-intro__action'>
            <Link href={ExternalRoutes.Social.Gmail}>
              <ButtonBase 
                className='ml-button' 
                children={Translation.en.common.getInTouch}
              />
            </Link>
            <ButtonBase className='ml-button ml-button--alt' onClick={goToGithub}>
              {Translation.en.common.viewGithub} 
              <Arrow className='ml-button__icon' />
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlIntro;
