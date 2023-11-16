import React, { Fragment, ReactElement, ReactNode } from 'react';
import MlFooterLegal from './footer-legal';

export interface MlFooterProps { }

export interface MlFooterItemsProps {
  title: string;
  link?: string;
  icon?: ReactNode | undefined;
  children?: MlFooterItemsProps[];
}

function MlFooter(): ReactElement {
  return (
    <Fragment>
      <div className='vp-section vp-footer' data-aos='fade-in'>
      </div>
      <div className='vp-section vp-footer-bottom' data-aos='fade-in'>
        <div className='vp-section__wrap vp-footer-bottom__content'>  
          <MlFooterLegal />
        </div>
      </div>
    </Fragment>
  );
}

export default MlFooter;
