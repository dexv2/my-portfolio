import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import SkillSoft from '../../../../assets/svg/visual/skill-soft.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';
import { Em } from './features';

function SkillDescription() {
  return (
    <>
      As a professional, I bring a versatile skill set to the table — I am <Em s='accountable' />, ensuring responsibility in every task. Upholding <Em s='ethical' /> standards is paramount in my approach. A natural <Em s='problem-solver' /> and <Em s='critical thinker' />, I thrive in analyzing challenges and finding innovative solutions. I am both a <Em s='team player' /> and a <Em s='leader' />, fostering collaboration while providing guidance when needed. Known for my <Em s='flexibility' />, I adapt seamlessly to dynamic work environments. Finally, my <Em s='diligent' /> work ethic ensures that every project is approached with dedication and attention to detail.
    </>
  )
}

function MlFeatureZap(): ReactElement {
  return (
    <div className='ml-section ml-features ml-feature-zap' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.skills.soft.title}
          </h2>
          <p className='ml-features__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='ml-features__visual' {...animFadeIn()}>
          <SkillSoft />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureZap;
