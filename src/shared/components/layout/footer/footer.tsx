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
      <div className='ml-section ml-footer' data-aos='fade-in'>
      </div>
      <div className='ml-section ml-footer-bottom' data-aos='fade-in'>
        <div className='ml-section__wrap ml-footer-bottom__content'>  
          <MlFooterLegal />
        </div>
      </div>
    </Fragment>
  );
}

export default MlFooter;
