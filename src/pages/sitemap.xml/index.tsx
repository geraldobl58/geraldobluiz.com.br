import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  const fields = posts.map(({ slug }) => ({
    loc: `https://www.geraldobluiz.com.br/post/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://www.geraldobluiz.com.br',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://www.geraldobluiz.com.br/sobre',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://www.geraldobluiz.com.br/portfolio',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://www.geraldobluiz.com.br/blog',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://www.geraldobluiz.com.br/contato',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
