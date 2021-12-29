import News, { NewsTemplateProps } from 'templates/News'

import client from 'graphql/client'
import { GET_POSTS } from 'graphql/queries'
import { GetPostsQuery } from 'graphql/generated/graphql'

export default function Blog(props: NewsTemplateProps) {
  return <News {...props} />
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      cardArticle: posts
    }
  }
}
