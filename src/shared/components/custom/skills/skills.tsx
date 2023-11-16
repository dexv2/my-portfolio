import React, { Fragment, ReactElement } from 'react';

import VpSkillBlockchain from './skill-blockchain';
import VpSkillFullStack from './skill-fullstack';
import VpSkillSoft from './skill-soft';
import VpSkillTesting from './skill-testing';

export type VpSkillSProps = { }

export function Em({s}: {s: string}) {
  return <span className='vp-skills--emphasized'>{s}</span>
}

function VpSkills({ 
  ...props 
}: VpSkillSProps): ReactElement {
  return (
    <Fragment>
      <VpSkillFullStack />
      <VpSkillBlockchain />
      <VpSkillTesting />
      <VpSkillSoft />
    </Fragment>
  );
}

export default VpSkills;
