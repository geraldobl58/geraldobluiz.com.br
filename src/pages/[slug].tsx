import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'

import { Container } from 'components/Container'

import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import Base from 'templates/Base'

export default function Page({ heading, subheading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <Base>
      <Container>
        <PageTemplate heading={heading} subheading={subheading} body={body} />
      </Container>
    </Base>
  )
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      subheading: page.subheading,
      body: page.body.html
    }
  }
}
