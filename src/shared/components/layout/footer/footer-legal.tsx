import React, { Fragment, ReactElement } from 'react';
import Translation from '../../../data/translation';
import { animSlideDown } from '../../../config/anim';

function MlFooterLegal(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div className='ml-footer-legal' {...animSlideDown()}>  
        <p className='ml-footer-legal__copyright'>
          {Translation.en.footer.copyright} ©{currentYear} by {Translation.en.meta.title}. {Translation.en.footer.allRightsReserved}
        </p>
      </div>
    </Fragment>
  );
}

export default MlFooterLegal;
