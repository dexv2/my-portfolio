import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import SkillSoft from '../../../../assets/svg/visual/skill-soft.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';
import { Em } from './skills';

function SkillDescription() {
  return (
    <>
      As a professional, I bring a versatile skill set to the table — I am <Em s='accountable' />, ensuring responsibility in every task. 
      Upholding <Em s='ethical' /> standards is paramount in my approach. A natural <Em s='problem-solver' /> and <Em s='critical thinker' />, I thrive 
      in analyzing challenges and finding innovative solutions. I am both a <Em s='team player' /> and a <Em s='leader' />, fostering collaboration 
      while providing guidance when needed. Known for my <Em s='flexibility' />, I adapt seamlessly to dynamic work environments. Finally, 
      my <Em s='diligent' /> work ethic ensures that every project is approached with dedication and attention to detail.
    </>
  )
}

function VpSkillSoft(): ReactElement {
  return (
    <div className='vp-section vp-skills' data-aos='fade-in'>
      <div className='vp-section__wrap vp-skills__content'>
        <div className='vp-skills__box' {...animSlideUp()}>
          <h2 className='vp-section__title vp-skills__title' {...animSlideOut()}>
            {Translation.en.section.skills.soft.title}
          </h2>
          <p className='vp-skills__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='vp-skills__visual' {...animFadeIn()}>
          <SkillSoft />
        </div>
      </div>
    </div>
  );
}

export default VpSkillSoft;
