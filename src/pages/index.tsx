import Home, { HomeTemplateProps } from 'templates/Home'

import portfolioMock from 'components/CardPortfolio/mock'
import client from 'graphql/client'
import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      cardPortfolio: portfolioMock,
      cardArticle: posts
    }
  }
}
