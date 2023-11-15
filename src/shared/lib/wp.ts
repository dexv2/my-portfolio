import { 
  WpCategoryProps, 
  WpPostWithSlugProps, 
  WpPostProps,
} from '../model/wp';

const API_URL = process.env.WP_API_URL

const fetchAPI = async (query: string, { variables = {} } = {}) => {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch WP API');
  }
  return json.data;
}

export const getAllCategories = async (): Promise<WpCategoryProps[]> => {
  const data = await fetchAPI(`
    query AllCategory {
      categories {
        edges {
          node {
            categoryId
            slug
            name
          }
        }
      }
    }
  `);
  const edges = data?.categories.edges;
  const result = edges.length > 0 ? edges.map((e: {node: {}}) => e.node) : [];
  return result;
}

export const getAllPostsWithSlug = async (): Promise<WpPostWithSlugProps[]> => {
  const data = await fetchAPI(`
    query AllPostsWithSlug {
      posts(where: {status: PUBLISH}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  const edges = data?.posts.edges;
  const result = edges.length > 0 ? edges.map((e: {node: {}}) => e.node) : [];
  return result;
}

export const getAllPosts = async (): Promise<WpPostProps[]> => {
  const data = await fetchAPI(`
    query AllPosts {
      posts(where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}) {
        edges {
          node {
            id
            date
            title
            slug
            excerpt
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            categories {
              edges {
                node {
                  categoryId
                  slug
                  name
                }
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `);
  const edges = data?.posts.edges;
  const result = edges.length > 0 ? edges.map((e: {node: {}}) => e.node) : [];
  return result;
}

export const getPost = async (slug: string): Promise<WpPostProps> => {
  const data = await fetchAPI(`
    fragment PostFields on Post {
      id
      date
      title
      slug
      excerpt
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories {
        edges {
          node {
            categoryId
            slug
            name
          }
        }
      }
      author {
        node {
          name
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );
  return data?.post;
}