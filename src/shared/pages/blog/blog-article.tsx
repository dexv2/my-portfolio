import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import truncateText from '../../utils/truncate-text';
import MlFrame from '../../components/layout/frame/frame';
import MlBlogContent from '../../components/custom/blog/blog-content';
import MlBlogShare from '../../components/custom/blog/blog-share';
import MlBlogRecommended from '../../components/custom/blog/blog-recommended';
import { getAllPostsWithSlug, getAllPosts, getPost } from '../../lib/wp';
import { WpPostWithSlugProps, WpPostProps } from '../../model/wp';

export type BlogArticlePathProps = {
  params: {
    slug: string;
  }
}

export type BlogArticleProps = {
  blogPost: WpPostProps;
  recommendedPosts: WpPostProps[];
}

export const BlogArticle: NextPage<BlogArticleProps> = ({ blogPost, recommendedPosts}) => {
  return (
    <MlFrame>
      <Head>
        <title>{blogPost.title}</title>
        <meta content={blogPost.title} property='og:title' />
        <meta content={blogPost.title} name='twitter:title' />
        <meta content={blogPost.excerpt} name='description' />
        <meta content={blogPost.excerpt} property='og:description' />
        <meta content={blogPost.excerpt} name='twitter:description' />
        <meta content={blogPost.featuredImage.node.mediaItemUrl} property='og:image' />
        <meta content={blogPost.featuredImage.node.mediaItemUrl} name='twitter:image' />
        <meta content={blogPost.featuredImage.node.mediaItemUrl} name='image' />
        <meta content='article' property='og:type' />
        <meta content='summary_large_image' name='twitter:card' />
      </Head>
      <div className='ml-blog'>
        <MlBlogContent {...{blogPost}} />
        <MlBlogShare {...{blogPost}} />
        <MlBlogRecommended {...{recommendedPosts}} />
      </div>
    </MlFrame>
  )
}

export async function getStaticPaths() {
  const blogPostsWithSlug = await getAllPostsWithSlug();
  return {
    paths: blogPostsWithSlug.map((posts: WpPostWithSlugProps) => ({
      params: {
        slug: posts.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: BlogArticlePathProps) {
  const blogPosts = await getAllPosts();
  const blogPost = await getPost(params.slug);
  const recommendedPostCount = 3;
  const recommendedPosts = blogPosts
    .slice(0,(recommendedPostCount+1))
    .filter((b: WpPostProps) => b.slug !== blogPost.slug)
    .slice(0,recommendedPostCount)
    .map((post) => ({...post, excerpt: truncateText(post.excerpt)})); 
  return {
    props: { 
      blogPost: blogPost,
      recommendedPosts: recommendedPosts,
    },
    revalidate: 60 * 10,
  };
}