import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import SkillFullStack from '../../../../assets/svg/visual/skill-fullstack.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';
import { Em } from './skills';

function SkillDescription() {
  return (
    <>
      Proficient in both <Em s='Javascript' /> and <Em s='Typescript' />, I excel in full-stack development, harnessing the power 
      of <Em s='React' />, <Em s='Next.js' />, and <Em s='Vite.js' /> for dynamic front-end experiences, and <Em s='Vue.js' /> for 
      creating versatile UI components. I ensure smooth collaboration and version control using <Em s='Git' /> and <Em s='GitHub' />. 
      On the server side, I leverage the capabilities of <Em s='Node.js' /> to build robust applications, complemented by <Em s='MongoDB' /> for 
      efficient data storage. Whether crafting <Em s='RESTful APIs' /> or integrating with existing ones, my holistic approach spans the entire 
      stack, ensuring seamless and scalable web development.
    </>
  )
}

function VpSkillFullStack(): ReactElement {
  return (
    <div id='skills' className='vp-section vp-skills vp-skills--right' data-aos='fade-in'>
      <div className='vp-section__wrap vp-skills__content'>
        <div className='vp-skills__box' {...animSlideUp()}>
          <h2 className='vp-section__title vp-skills__title' {...animSlideOut()}>
            {Translation.en.section.skills.fullStack.title}
          </h2>
          <p className='vp-skills__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='vp-skills__visual' {...animFadeIn()}>
          <SkillFullStack />
        </div>
      </div>
    </div>
  );
}

export default VpSkillFullStack;
