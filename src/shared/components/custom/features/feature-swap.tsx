import React, { ReactElement } from 'react';
import Translation from '../../../data/translation';
import SkillBlockchain from '../../../../assets/svg/visual/skill-blockchain.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';
import { Em } from './features';

function SkillDescription() {
  return (
    <>
      I specialize in developing decentralized applications (<Em s='DApps' />) and <Em s='Smart Contracts' /> using <Em s='Solidity' />, 
      implementing cutting-edge features such as <Em s='Staking' />, <Em s='Yield Farming' />, and <Em s='Decentralized Exchanges' />. 
      My expertise extends to using libraries such as <Em s='Web3.js' />, <Em s='Ethers.js' />, and <Em s='Viem' />, and <Em s='IPFS' /> for 
      seamless data storage, while also leveraging advanced tools like <Em s='Hardhat' /> and <Em s='Foundry' /> for <Em s='Smart Contract Deployment Automation' /> and 
      maintaining <Em s='Upgradeable proxies' />. With a keen understanding of <Em s='JSON RPC' />, <Em s='EVM' />, and <Em s='GraphQL/Subgraphs' />, 
      I'm dedicated to pushing the boundaries of <Em s='DeFi' /> innovation.
    </>
  )
}

function MlFeatureSwap(): ReactElement {
  return (
    <div className='vp-section vp-features vp-feature-swap' data-aos='fade-in'>
      <div className='vp-section__wrap vp-features__content'>
        <div className='vp-features__box' {...animSlideUp()}>
          <h2 className='vp-section__title vp-features__title' {...animSlideOut()}>
            {Translation.en.section.skills.blockchain.title}
          </h2>
          <p className='vp-features__description'>
            <SkillDescription />
          </p>
        </div>
        <div className='vp-features__visual' {...animFadeIn()}>
          <SkillBlockchain />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureSwap;
