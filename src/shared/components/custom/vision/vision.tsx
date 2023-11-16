import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import VisiondBg from '../../../../assets/svg/visual/vision-bg.svg';
import { animSlideUp, animSlideOut } from '../../../config/anim';

export type MlVisionProps = { }

function MlVision({ 
  ...props 
}: MlVisionProps): ReactElement {
  return (
    <>
      <div id='about'></div>
      <div className='vp-section vp-vision' data-aos='fade-in'>
        <div className='vp-section__wrap vp-vision__content'>
          <div className='vp-vision__card' {...animSlideUp()}>
            <VisiondBg className='vp-vision__bg' />
            <div className='vp-vision__content'>
              <h2 className='vp-typo--highlight vp-vision__title'>
                {Translation.en.section.about.title}
              </h2>
              <p className='vp-vision__text' {...animSlideOut()}>
                {Translation.en.section.about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MlVision;
