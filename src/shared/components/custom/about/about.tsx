import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import AboutBg from '../../../../assets/svg/visual/about-bg.svg';
import { animSlideUp, animSlideOut } from '../../../config/anim';

export type VpAboutProps = { }

function VpAbout({ 
  ...props 
}: VpAboutProps): ReactElement {
  return (
    <>
      <div id='about'></div>
      <div className='vp-section vp-about' data-aos='fade-in'>
        <div className='vp-section__wrap vp-about__content'>
          <div className='vp-about__card' {...animSlideUp()}>
            <AboutBg className='vp-about__bg' />
            <div className='vp-about__content'>
              <h2 className='vp-typo--highlight vp-about__title'>
                {Translation.en.section.about.title}
              </h2>
              <p className='vp-about__text' {...animSlideOut()}>
                {Translation.en.section.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VpAbout;
