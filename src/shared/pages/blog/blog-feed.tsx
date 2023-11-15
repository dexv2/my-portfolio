

import React, { useEffect, useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';

import Translation from '../../data/translation';
import truncateText from '../../utils/truncate-text';
import MlFrame from '../../components/layout/frame/frame';
import MlBlogList from '../../components/custom/blog/blog-list';
import MlBlogSelector from '../../components/custom/blog/blog-selector';
import MlBlogMore from '../../components/custom/blog/blog-more';
import { WpCategoryProps, WpPostProps } from '../../model/wp';
import { getAllCategories, getAllPosts } from '../../lib/wp';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export interface WpPostListProps {
  items: WpPostProps[],
  limit: number,
  offset: number,
  total: number,
}

export type BlogFeedProps = {
  blogCategories: WpCategoryProps[];
  blogPosts: WpPostProps[];
}

export const BlogFeed: NextPage<BlogFeedProps> = ({blogCategories, blogPosts}) => {

  const allPostCategory = {
    name: Translation.en.blog.allPosts,
    slug: `all`,
    categoryId: `0`,
  } as WpCategoryProps;
  const categoryList = [allPostCategory, ...blogCategories];
  const [ total, setTotal ] = useState(0);
  const [ loaded, setLoaded ] = useState(0);
  const [ category, setCategory ] = useState<WpCategoryProps>(allPostCategory);
  const [ posts, setPosts ] = useState<WpPostProps[]>([]);
  const [ page, setPage ] = useState(DEFAULT_PAGE);
  const [ pageSize, setPageSize ] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    loadPosts();
  }, [page, category]);
  
  const changeCategory = (slug: string) => {
    if (category?.slug !== slug) {
      const selectedCategory = categoryList.find(c => c.slug === slug) || allPostCategory;
      setCategory(selectedCategory);
      setPosts([]);
      setPage(DEFAULT_PAGE);
    }
  }

  const loadMorePosts = (postPage: number = page + 1) => {
    if (loaded < total) setPage(postPage);
  }

  const loadPosts = async () => {
    const loadedPosts = await getPosts();
    setTotal(loadedPosts.total);
    setLoaded(loadedPosts.offset + loadedPosts.limit);
    setPosts(loadedPosts.items);
  }

  const getPosts = (): WpPostListProps => {
    let basePosts = JSON.parse(JSON.stringify(blogPosts));
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (category && category.slug !== allPostCategory.slug) {
      basePosts = basePosts.filter((p: WpPostProps) => 
        p.categories.edges[0].node.categoryId.toString() === category.categoryId.toString()
      )
    }
    const selectedPostsItems = basePosts.slice(startIndex, endIndex);
    const updatedPosts = {
      items: [...posts, ...selectedPostsItems],
      limit: pageSize,
      offset: startIndex,
      total: basePosts.length,
    };
    const completePosts = Object.assign(basePosts, updatedPosts);
    console.log('GETPOSTS', completePosts);
    return completePosts;
  }

  return (
    <MlFrame>
      <div className='ml-blog'>
        <MlBlogSelector {...{category, categoryList, changeCategory}} />
        <MlBlogList {...{blogPosts: posts}} />
        <MlBlogMore {...{loaded, total, loadMorePosts}} />
      </div>
    </MlFrame>
  )
}

export const getStaticProps: GetStaticProps<BlogFeedProps> = async () => {
  const allBlogCategories = await getAllCategories();
  const unCategorizedSlug = `uncategorized`;
  const blogCategories = allBlogCategories.filter((c: WpCategoryProps) => c.slug !== unCategorizedSlug);
  const blogPosts = (await getAllPosts()).map((post) => ({...post, excerpt: truncateText(post.excerpt)}));
  return {
    props: {
      blogCategories,
      blogPosts,
    },
    revalidate: 60 * 10,
  };
};
