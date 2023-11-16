import React, { Fragment, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import Translation from '../../../data/translation';
import VpHeader from '../header/header';
import VpFooter from '../footer/footer';

export enum VpSiteLayout {
  Landing = 'landing',
}

export interface VpFrameProps {
  children: ReactNode | undefined,
  title?: string;
  description?: string;
  layout?: VpSiteLayout,
}

function VpFrame({
  title = Translation.en.meta.title,
  description = Translation.en.meta.description,
  layout = VpSiteLayout.Landing,
  ...props
}: VpFrameProps): ReactElement {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={title} />
        <meta property='og:image' content='https://vermontpaguiligan.com/assets/icons/icon-512x512.png' />
        <meta property='og:url' content='https://vermontpaguiligan.com/' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://vermontpaguiligan.com/assets/icons/icon-512x512.png' />
        <meta name='twitter:url' content='https://vermontpaguiligan.com/' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content={title} />
      </Head>
      <div className={`vp-layout ${layout ? `vp-layout--${layout}` : ``}`}>
        <VpHeader />
        <main className='vp-layout__content'>
          {props.children}
        </main>
        <VpFooter />
      </div>
    </Fragment>
  );
}

export default VpFrame;
