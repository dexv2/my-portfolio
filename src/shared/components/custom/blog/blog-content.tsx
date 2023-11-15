import Image from 'next/image';
import React, { Fragment, ReactElement } from 'react';
import Moment from 'react-moment';

import { animSlideUp } from '../../../config/anim';
import { dateFormat } from '../../../config/datetime';
import { WpPostProps } from '../../../model/wp';
import imagePlaceholder from '../../../utils/image-placeholder';

export type MlBlogContentProps = {
  blogPost: WpPostProps,
}

function MlBlogContent({ blogPost }: MlBlogContentProps): ReactElement {
  return (
    <div className='ml-section ml-blog-content' data-aos='fade-in'>
      <div className='ml-section__wrap  ml-blog-content__content'>
        {blogPost &&
          <Fragment>
            <div className='ml-blog-content__header'>
              <h1 className='ml-blog-content__title' {...animSlideUp()}>
                {blogPost.title}
              </h1>
              <p className={`
                ml-blog__category 
                ml-blog__category--${blogPost.categories?.edges[0].node.slug} 
                ml-blog-card__category 
                ml-blog-content__category`}>
                {blogPost.categories?.edges[0].node.name}
              </p>
              <p className='ml-blog-content__published'>
                <span className='ml-blog-content__author'>
                  {blogPost.author?.node.name}
                </span>
                <span className='ml-blog-content__date'>
                  <Moment 
                    date={blogPost.date} 
                    format={dateFormat} 
                  />
                </span>
              </p>
            </div>
            <div className='ml-blog__thumbnail ml-blog-content__image'>
            {blogPost.featuredImage &&
              <Image
                src={blogPost.featuredImage?.node.mediaItemUrl} 
                alt={blogPost.title} 
                placeholder='blur'
                blurDataURL={imagePlaceholder({width: 900, height: 506})}
                width={900}
                height={506}
                quality={100}
                layout='responsive' 
              />
            }
            </div>
            <div className='ml-blog-content__text' dangerouslySetInnerHTML={{__html: blogPost.content || ``}} />
          </Fragment>
        }
      </div>
    </div>
  );
}

export default MlBlogContent;
