import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import SkillTesting from '../../../../assets/svg/visual/skill-testing.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';
import { Em } from './features';

function SkillDescription() {
  return (
    <>
      For <Em s='code maturity' /> and extra <Em s='security' />, I advocate for a comprehensive testing strategy, embracing methodologies 
      like <Em s='Test Driven Development' /> to ensure robust code from the start. Utilizing <Em s='Unit Testing' />, I meticulously validate 
      individual components, while <Em s='Integration Testing' /> guarantees seamless collaboration between them. 
      Utilized <Em s='Fuzzing' /> and <Em s='Invariant Testing' /> which is a powerful tool to expose incorrect logic in protocols. This 
      meticulous approach to testing ensures the <Em s='reliability' /> and <Em s='stability' /> of the entire application.
    </>
  )
}

function MlFeatureSecurity(): ReactElement {
  return (
    <div className='vp-section vp-features vp-features--right vp-feature-security' data-aos='fade-in'>
      <div className='vp-section__wrap vp-features__content'>
        <div className='vp-features__box' {...animSlideUp()}>
          <h2 className='vp-section__title vp-features__title' {...animSlideOut()}>
            {Translation.en.section.skills.testing.title}
          </h2>
          <p className='vp-features__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='vp-features__visual' {...animFadeIn()}>
          <SkillTesting />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureSecurity;
