export interface WpCategoryProps {
  categoryId: string;
  slug: string;
  name: string;
}

export interface WpPostWithSlugProps {
  slug: string;
}

export interface WpPostProps {
  id: string;
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: {
    node: {
      mediaItemUrl: string;
    }
  }
  categories: {
    edges: [{
      node: {
        categoryId: string;
        slug: string;
        name: string;
      }
    }]
  }
  author: {
    node: {
      name: string;
    }
  }
}
