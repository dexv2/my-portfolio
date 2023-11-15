import React, { ReactElement } from 'react';

import { ExternalRoutes } from '../../../pages/routes';
import Translation from '../../../data/translation';
import SocialLinkedIn from '../../../../assets/svg/social/linkedin.svg';
import SocialGithub from '../../../../assets/svg/social/github.svg';
import SocialGmail from '../../../../assets/svg/social/gmail.svg';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlCommunityProps = { }

export type MlCommunityItem = {
  icon: ReactElement;
  name: string;
  description: string;
  link: string;
}

const communityList: MlCommunityItem[] = [
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

function MlCommunity({ 
  ...props 
}: MlCommunityProps): ReactElement {
  return (
    <div id='connect' className='ml-section ml-community' data-aos='fade-in'>
      <div className='ml-section__wrap ml-community__content'>
        <h2 className='ml-section__title ml-community__title' {...animSlideOut()}>
          {Translation.en.section.community.title}
        </h2>
        <div className='ml-community__list-container'>
          <ul className='ml-community__list'>
            {communityList.map((communityItem, index) => 
              <li key={index} className='ml-community__item' {...animSlideUp()}>
                <a href={communityItem.link} target='_blank' rel='noopener noreferrer' className='ml-card ml-community__card'>
                  <i className={`ml-icon ml-community__item__icon ml-community__item__icon--${communityItem.name.toLowerCase()}`} {...animSlideOut()}>
                    <span className='ml-community__item__icon__gradient-border'></span>
                    {communityItem.icon}
                  </i>
                  <h3 className='ml-community__item__title ml-typo--highlight'>
                    {communityItem.name}
                  </h3>
                  <p className='ml-community__item__description'>
                    {communityItem.description}
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

export default MlCommunity;
