import React, { Fragment, ReactElement } from 'react';

import MlFeatureSwap from './feature-swap';
import MlFeaturePerp from './feature-perp';
import MlFeatureZap from './feature-zap';
import MlFeatureSecurity from './feature-security';

export type MlFeaturesProps = { }

export function Em({s}: {s: string}) {
  return <span className='ml-features--emphasized'>{s}</span>
}

function MlFeatures({ 
  ...props 
}: MlFeaturesProps): ReactElement {
  return (
    <Fragment>
      <MlFeaturePerp />
      <MlFeatureSwap />
      <MlFeatureSecurity />
      <MlFeatureZap />
    </Fragment>
  );
}

export default MlFeatures;
