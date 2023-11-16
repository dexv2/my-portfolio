import React, { ReactElement } from 'react';

import { ExternalRoutes } from '../../../pages/routes';
import Translation from '../../../data/translation';
import SocialLinkedIn from '../../../../assets/svg/social/linkedin.svg';
import SocialGithub from '../../../../assets/svg/social/github.svg';
import SocialGmail from '../../../../assets/svg/social/gmail.svg';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type VpConnectProps = { }

export type VpConnectItem = {
  icon: ReactElement;
  name: string;
  description: string;
  link: string;
}

const connectList: VpConnectItem[] = [
  {
    icon: <SocialLinkedIn />,
    name: Translation.en.section.social.linkedin.title,
    description: Translation.en.section.social.linkedin.description,
    link: ExternalRoutes.Social.LinkedIn,
  },
  {
    icon: <SocialGithub />,
    name: Translation.en.section.social.github.title,
    description: Translation.en.section.social.github.description,
    link: ExternalRoutes.Social.Github,
  },
  {
    icon: <SocialGmail />,
    name: Translation.en.section.social.gmail.title,
    description: Translation.en.section.social.gmail.description,
    link: ExternalRoutes.Social.Gmail,
  },
];

function VpConnect({ 
  ...props 
}: VpConnectProps): ReactElement {
  return (
    <div id='connect' className='vp-section vp-connect' data-aos='fade-in'>
      <div className='vp-section__wrap vp-connect__content'>
        <h2 className='vp-section__title vp-connect__title' {...animSlideOut()}>
          {Translation.en.section.connect.title}
        </h2>
        <div className='vp-connect__list-container'>
          <ul className='vp-connect__list'>
            {connectList.map((connectItem, index) => 
              <li key={index} className='vp-connect__item' {...animSlideUp()}>
                <a href={connectItem.link} target='_blank' rel='noopener noreferrer' className='vp-card vp-connect__card'>
                  <i className={`vp-icon vp-connect__item__icon vp-connect__item__icon--${connectItem.name.toLowerCase()}`} {...animSlideOut()}>
                    <span className='vp-connect__item__icon__gradient-border'></span>
                    {connectItem.icon}
                  </i>
                  <h3 className='vp-connect__item__title vp-typo--highlight'>
                    {connectItem.name}
                  </h3>
                  <p className='vp-connect__item__description'>
                    {connectItem.description}
                  </p>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VpConnect;
