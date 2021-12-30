import Home, { HomeTemplateProps } from 'templates/Home'

import client from 'graphql/client'
import { GetPortfoliosQuery, GetPostsQuery } from 'graphql/generated/graphql'
import { GET_PORTFOLIOS, GET_POSTS } from 'graphql/queries'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)
  const { portfolios } = await client.request<GetPortfoliosQuery>(
    GET_PORTFOLIOS
  )

  return {
    props: {
      cardPortfolio: portfolios,
      cardArticle: posts
    }
  }
}
