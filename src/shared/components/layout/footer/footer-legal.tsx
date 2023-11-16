import React, { Fragment, ReactElement } from 'react';
import Translation from '../../../data/translation';
import { animSlideDown } from '../../../config/anim';

function MlFooterLegal(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div className='vp-footer-legal' {...animSlideDown()}>  
        <p className='vp-footer-legal__copyright'>
          {Translation.en.footer.copyright} ©{currentYear} by {Translation.en.meta.title}. {Translation.en.footer.allRightsReserved}
        </p>
      </div>
    </Fragment>
  );
}

export default MlFooterLegal;
