import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import Moment from 'react-moment';

import { Routes } from '../../../pages/routes';
import { WpPostProps } from '../../../model/wp';
import { dateFormat } from '../../../config/datetime';
import imagePlaceholder from '../../../utils/image-placeholder';

export type MlBlogCardProps = {
  blogPost: WpPostProps;
}

function MlBlogCard({ blogPost }: MlBlogCardProps): ReactElement {
  return (
    <Link href={Routes.Menu.BlogArticle(blogPost.slug)}>
      <div className='ml-blog-card'>
        <div className='ml-blog__thumbnail ml-blog-card__thumbnail'>
          <Image
            src={blogPost.featuredImage.node.mediaItemUrl} 
            alt={blogPost.title} 
            placeholder='blur'
            blurDataURL={imagePlaceholder({width: 550, height: 303})}
            layout='responsive'
            width={550}
            height={303}
          />
        </div>
        <div className='ml-blog-card__info'>
          <p className={`ml-blog__category ml-blog__category--${blogPost.categories.edges[0].node.slug} ml-blog-card__category`}>
            {blogPost.categories.edges[0].node.name}
          </p>
          <p className='ml-blog-card__published'>
            <span className='ml-blog-card__author'>
              {blogPost.author.node.name}
            </span>
            <span className='ml-blog-card__date'>
              <Moment 
                date={blogPost.date} 
                format={dateFormat} 
              />
            </span>
          </p>
        </div>
        <h3 className='ml-blog-card__title'>
          {blogPost.title}
        </h3>
        <div 
          className='ml-blog-card__text' 
          dangerouslySetInnerHTML={{__html: blogPost.excerpt}} 
        />
      </div>
    </Link>
  );
}

export default MlBlogCard;
