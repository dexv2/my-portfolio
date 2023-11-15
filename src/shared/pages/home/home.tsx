import React from 'react'
import type { NextPage } from 'next'

import MlFrame from '../../components/layout/frame/frame'
import MlApps from '../../components/custom/apps/apps'
import MlIntro from '../../components/custom/intro/intro'
import MlFeatures from '../../components/custom/features/features'
import MlVision from '../../components/custom/vision/vision'
import MlRoadmap from '../../components/custom/roadmap/roadmap'
import MlPartners from '../../components/custom/partners/partners'
import MlCommunity from '../../components/custom/community/community'

export interface HomeProps {
  userAgent: string;
}

export const Home: NextPage<HomeProps> = ({ userAgent }) => {
  return (
    <MlFrame>
      <MlIntro {...{userAgent}}></MlIntro>
      <MlApps></MlApps>
      <MlFeatures></MlFeatures>
      <MlVision></MlVision>
      <MlRoadmap></MlRoadmap>
      <MlCommunity></MlCommunity>
    </MlFrame>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent: userAgent || `` }
}