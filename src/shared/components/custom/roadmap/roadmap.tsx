import { ArrowForwardIos } from '@mui/icons-material';
import { ButtonBase, useMediaQuery } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import Translation from '../../../data/translation';
import { animSlideOut, animSlideUp } from '../../../config/anim';
import { Milestones, MilestoneStatus, VpMilestonesItem } from '../../../data/roadmap';

export type VpRoadmapProps = { }

export type VpMilestonesGroup = {
  index?: number;
  active?: number;
  groupName: string; 
  groupTitle: string; 
  groupPosition: string; 
  groupItems: VpMilestonesItem[];
}

const DEFAULT_MILESTONE_GROUP_INDEX = 2;

const VpMilestoneGroup = (group: VpMilestonesGroup) => {
  const groupIndex = group.index || 0;
  return (
    <div className={`
      vp-roadmap__milestones__group
      ${group.active === groupIndex + 1 ? ` vp-roadmap__milestones__group--prev-active` : ``}
      ${group.active === group.index ? ` vp-roadmap__milestones__group--active` : ``}
    `}>
      <div className='vp-roadmap__milestones__mark'>
        <h3 className='vp-roadmap__milestones__date vp-title--highlight'>
          {group.groupName}
        </h3>
        <div className='vp-roadmap__milestones__dot'></div>
      </div>
      <div className='vp-card vp-roadmap__milestones__card' {...animSlideUp()}>
        <div className='vp-roadmap__milestones__title'>
          <i className='vp-roadmap__milestones__status vp-roadmap__milestones__status--none'></i>
          <div className='vp-roadmap__milestones__content'>
            <h2 className='vp-roadmap__milestones__company vp-typo--highlight'>
              {group.groupTitle}
            </h2>
            <h2 className='vp-roadmap__milestones__position'>
              {group.groupPosition}
            </h2>
          </div>
        </div>
        <ul className='vp-roadmap__milestones__list'>
          {group.groupItems.map((item, index) =>
            <VpMilestoneItem key={index} {...item} />
          )}
        </ul>
      </div>
    </div>
  )
};

const VpMilestoneItem = (item: VpMilestonesItem) => {
  return (
    <li className='vp-roadmap__milestones__item'>
      <i className={`
        vp-roadmap__milestones__status
        ${item.status === MilestoneStatus.Achieved ? ` vp-roadmap__milestones__status--active` : ``}
      `}></i>
      <span className={`
        vp-roadmap__milestones__text
        ${item.status === MilestoneStatus.Achieved ? ` vp-roadmap__milestones__text--active` : ``}
      `}>
        {item.name}
      </span>
    </li>
  )
};

function VpRoadmap({ 
  ...props 
}: VpRoadmapProps): ReactElement {

  const [ activeGroup, setActiveGroup ] = useState(DEFAULT_MILESTONE_GROUP_INDEX);
  const desktopOrBigger = useMediaQuery('(min-width:1110px)');

  const goToGroup = (index: number) => {
    setActiveGroup(index);
  }

  const goToPrevGroup = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let index = activeGroup;
    if (index >= 1) {
      --index;
    }
    setActiveGroup(index);
  }

  const goToNextGroup = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let index = activeGroup;
    if (index < Milestones.length - 1) {
      ++index;
    }
    setActiveGroup(index);
  }

  return (
    <>
      <div id='experience'></div>
      <div className='vp-section vp-roadmap' data-aos='fade-in'>
        <div className='vp-section__wrap vp-roadmap__content'>
          <h2 className='vp-section__title vp-roadmap__title' {...animSlideOut()}>
            {Translation.en.section.roadmap.title}
          </h2>
          <div className='vp-roadmap__steps'>
            {Milestones.map((group, index) =>
              <div 
                key={index}
                onClick={() => goToGroup(index)}
                className={`
                  vp-roadmap__steps__item
                  ${index === activeGroup ? ` vp-roadmap__steps__item--active` : ``}
                `}
              >
                <div className='vp-roadmap__steps__item__bullet'></div>
              </div>
            )}
          </div>
          <div className='vp-roadmap__wrap'>
            <div className='vp-roadmap__timeline'></div>
            <div className='vp-roadmap__milestones'>
              <div className='vp-roadmap__controls'>
                <div className={`
                  vp-roadmap__controls__step 
                  vp-roadmap__controls__step--prev
                  ${activeGroup >= 1 ? `` : ` vp-roadmap__controls__step--disabled`}
                `}>
                  <ButtonBase 
                    className='vp-button-icon vp-button-icon--flip' 
                    children={<ArrowForwardIos />}
                    onClick={(e) => goToPrevGroup(e)}
                  />
                </div>
                <div className={`
                  vp-roadmap__controls__step 
                  vp-roadmap__controls__step--next
                  ${activeGroup < Milestones.length - 1 ? `` : ` vp-roadmap__controls__step--disabled`}
                `}>
                  <ButtonBase 
                    className='vp-button-icon' 
                    children={<ArrowForwardIos />}
                    onClick={(e) => goToNextGroup(e)}
                  />
                </div>
              </div>
              <div 
                className='vp-roadmap__milestones__group-list' 
                style={{right: `${(activeGroup - (desktopOrBigger ? 1 : 0)) * (desktopOrBigger ? 50 : 100)}%` }}
              >
                {Milestones.map((group, index) =>
                  <VpMilestoneGroup key={index} index={index} active={activeGroup} {...group} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VpRoadmap;
