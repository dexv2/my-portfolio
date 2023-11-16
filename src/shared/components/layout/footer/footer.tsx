import React, { Fragment, ReactElement, ReactNode } from 'react';
import VpFooterLegal from './footer-legal';

export interface VpFooterProps { }

export interface VpFooterItemsProps {
  title: string;
  link?: string;
  icon?: ReactNode | undefined;
  children?: VpFooterItemsProps[];
}

function VpFooter(): ReactElement {
  return (
    <Fragment>
      <div className='vp-section vp-footer' data-aos='fade-in'>
      </div>
      <div className='vp-section vp-footer-bottom' data-aos='fade-in'>
        <div className='vp-section__wrap vp-footer-bottom__content'>  
          <VpFooterLegal />
        </div>
      </div>
    </Fragment>
  );
}

export default VpFooter;
