import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import FeatureSecurity from '../../../../assets/svg/visual/feature-security.svg';
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
    <div className='ml-section ml-features ml-features--right ml-feature-security' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.skills.testing.title}
          </h2>
          <p className='ml-features__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='ml-features__visual' {...animFadeIn()}>
          <FeatureSecurity />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureSecurity;
