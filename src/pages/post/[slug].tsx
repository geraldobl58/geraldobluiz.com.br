import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'graphql/client'
import { GET_POSTS, GET_POST_BY_SLUG } from 'graphql/queries'
import { GetPostBySlugQuery, GetPostsQuery } from 'graphql/generated/graphql'

import { Container } from 'components/Container'

import Base from 'templates/Base'
import PostsTemplate, { PostsTemplateProps } from 'templates/Posts'

export default function PostPage({ post }: PostsTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <Base>
      <Container>
        <PostsTemplate post={post} />
      </Container>
    </Base>
  )
}

export async function getStaticPaths() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 3 })

  const paths = posts.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!post) return { notFound: true }

  return {
    props: {
      post
    }
  }
}
