import React from 'react'
import type { NextPage } from 'next'
import VpFrame from '../../components/layout/frame/frame'
import VpApps from '../../components/custom/apps/apps'
import VpIntro from '../../components/custom/intro/intro'
import VpSkills from '../../components/custom/skills/skills'
import VpAbout from '../../components/custom/about/about'
import VpRoadmap from '../../components/custom/roadmap/roadmap'
import VpConnect from '../../components/custom/connect/connect'

export interface HomeProps {
  userAgent: string;
}

export const Home: NextPage<HomeProps> = ({ userAgent }) => {
  return (
    <VpFrame>
      <VpIntro {...{userAgent}}></VpIntro>
      <VpApps></VpApps>
      <VpSkills></VpSkills>
      <VpAbout></VpAbout>
      <VpRoadmap></VpRoadmap>
      <VpConnect></VpConnect>
    </VpFrame>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent: userAgent || `` }
}