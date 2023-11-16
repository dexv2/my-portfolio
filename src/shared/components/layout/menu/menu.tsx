import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import { ClickAwayListener, useMediaQuery } from '@mui/material';
import { UrlObject } from 'url';
import Link from 'next/link';

import Translation from '../../../data/translation';
import { Routes } from '../../../pages/routes';
import Indicator from '../../../../assets/svg/icon/indicator.svg';

declare type Url = string | UrlObject;

export interface VpMenuItemsProps {
  title: string;
  alias?: string;
  link?: string | Url;
  linkType?: `internal` | `external`;
  icon?: ReactNode | undefined;
  children?: VpMenuItemsProps[];
}

const menuItems: VpMenuItemsProps[] = [
  {
    title: Translation.en.menupoint.home,
    link: Routes.Menu.Home,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.projects,
    link: Routes.Menu.Projects,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.skills,
    link: Routes.Menu.Skills,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.about,
    link: Routes.Menu.About,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.experience,
    link: Routes.Menu.Experience,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.connect,
    link: Routes.Menu.Connect,
    linkType: `internal`,
  },
];

const VpMenuLink = (menupoint: VpMenuItemsProps) => {
  return (
    <Fragment>
      {menupoint.link && menupoint.linkType === `internal` ?
        <Link href={menupoint.link as Url}>
          <span className='vp-link vp-menu__link'>
            {menupoint.icon && 
              <i className={`vp-menu__icon vp-menu__icon--${menupoint.alias}`}>
                {menupoint.icon}
              </i>
            } 
            <span className='vp-menu__text'>
              {menupoint.title}
            </span>
          </span>
        </Link>
      :
        <a 
          className='vp-link vp-menu__link'
          href={menupoint.link as string} 
          rel='noopener noreferrer'
          target='_blank'
        >
          {menupoint.icon && 
            <i className={`vp-icon vp-menu__icon vp-menu__icon--${menupoint.alias}`}>
              {menupoint.icon}
            </i>
          } 
          <span className='vp-menu__text'>
            {menupoint.title}
          </span>
        </a>
      }
    </Fragment>
  )
};

function VpMenu(): ReactElement {
  const isMobile = !useMediaQuery(`(min-width:768px)`);
  const [isMenuActive, setMenuActive] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<{[index: number]: EventTarget & HTMLElement} | null>(null);
  const handleMouseOver = (index: number, event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl({ [index]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      {isMobile &&
        <div 
          className={`vp-menu-button${isMenuActive ? ` vp-menu-button--active` : ``}`}
          onClick={() => setMenuActive(!isMenuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      <div className={`vp-menu${isMobile ? ` vp-compact-dialog` : ``}${isMenuActive ? ` vp-compact-dialog--active` : ``}`}>
        <ul className={`vp-menu__list${isMobile ? ` vp-compact-dialog__content` : ``}`}>
          {menuItems.map((menupoint, index) =>
            <li key={index} className={`vp-menu__item${menupoint.title === Translation.en.menupoint.connect ? ` vp-helper__only-desktop` : ``}`}>   
              {menupoint.children && !isMobile ? 
                <div {...(
                  isMobile ? 
                  {onClick: (e) => handleMouseOver(index, e)} :
                  {onMouseOver: (e) => handleMouseOver(index, e)}
                )}>
                  <span className='vp-menu__link' {...(
                    !isMobile && 
                    {onMouseLeave: handleClose}
                  )}>
                    <span className='vp-menu__text'>
                      {menupoint.title}
                    </span>
                    <Indicator className='vp-menu__indicator' />
                  </span>
                  <ClickAwayListener 
                    onClickAway={(isMobile ? handleClose : () => {})} 
                    mouseEvent={false}
                  >
                    <div 
                      id={`submenupoints-${index}`}
                      className={`vp-dropdown${Boolean(anchorEl && anchorEl[index]) ? ` vp-dropdown--active` : ``}`}
                      onMouseLeave={handleClose}
                    >
                      <ul className='vp-menu__sublist'>
                        {menupoint.children?.map((subMenupoint, subIndex) =>
                          <li 
                            key={subIndex}
                            onClick={handleClose} 
                            className='vp-menu__subitem'
                          >
                            <VpMenuLink {...subMenupoint} />
                          </li>
                        )}
                      </ul>
                    </div>
                  </ClickAwayListener>
                </div>
              :
                <VpMenuLink {...menupoint} />
              }
            </li>
          )}
          {isMobile && 
            <li key={`x`} className='vp-menu__item'>
              {menuItems.filter(m => m.children).map((menupoint, index) =>
                <ul key={index} className='vp-menu__sublist'>
                  {menupoint.children?.map((subMenupoint, subIndex) =>
                    <li 
                      key={subIndex}
                      onClick={handleClose} 
                      className='vp-menu__subitem'
                    >
                      <VpMenuLink {...subMenupoint} />
                    </li>
                  )}
                </ul>
              )}
            </li>
          }
        </ul>
      </div>
    </Fragment>
  );
}

export default VpMenu;
