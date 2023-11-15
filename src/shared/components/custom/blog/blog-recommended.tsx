import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import { animSlideUp } from '../../../config/anim';
import { WpPostProps } from '../../../model/wp';
import MlBlogCard from './blog-card';

export type MlBlogRecommendedProps = {
  recommendedPosts: WpPostProps[],
}

function MlBlogRecommended({ recommendedPosts }: MlBlogRecommendedProps): ReactElement {
  return (
    <div className='ml-section ml-blog-recommended' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-recommended__content'>
        <h2 className='ml-blog-recommended__title' {...animSlideUp()}>
          {Translation.en.blog.recommendedPosts}
        </h2>
        {recommendedPosts &&
          <ul className='ml-blog-recommended__list' {...animSlideUp()}>
            {recommendedPosts.map((post, index) => 
              <li key={index} className='ml-blog-recommended__item'>
                <MlBlogCard {...{blogPost: post}} />
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  );
}

export default MlBlogRecommended;
