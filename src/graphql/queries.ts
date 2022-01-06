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
        text
      }
    }
  }
`

export const GET_PORTFOLIOS = gql`
  query getPortfolios($first: Int) {
    portfolios(first: $first) {
      id
      cover {
        url
      }
      tag
      title
      slug
      techs
      description {
        html
      }
      gallery {
        url
      }
    }
  }
`

export const GET_PORTFOLIO_BY_SLUG = gql`
  query getPortfolioBySlug($slug: String!) {
    portfolio(where: { slug: $slug }) {
      id
      cover {
        url
      }
      tag
      title
      slug
      techs
      description {
        html
        text
      }
      gallery {
        url
      }
    }
  }
`
