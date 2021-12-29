import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      subheading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      subheading
      body {
        html
      }
    }
  }
`

export const GET_POSTS = gql`
  query getPosts($first: Int) {
    posts(first: $first) {
      id
      date
      title
      slug
      description {
        html
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      date
      title
      slug
      description {
        html
      }
    }
  }
`
