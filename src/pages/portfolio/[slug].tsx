import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'graphql/client'
import { GET_PORTFOLIOS, GET_PORTFOLIO_BY_SLUG } from 'graphql/queries'
import {
  GetPortfolioBySlugQuery,
  GetPortfoliosQuery
} from 'graphql/generated/graphql'

import { Container } from 'components/Container'

import Base from 'templates/Base'
import PortfolioTemplate, { PortfolioTemplateProps } from 'templates/Portfolios'

export default function PortfolioPage({ portfolio }: PortfolioTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <Base>
      <Container>
        <PortfolioTemplate portfolio={portfolio} />
      </Container>
    </Base>
  )
}

export async function getStaticPaths() {
  const { portfolios } = await client.request<GetPortfoliosQuery>(
    GET_PORTFOLIOS,
    {
      first: 3
    }
  )

  const paths = portfolios.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { portfolio } = await client.request<GetPortfolioBySlugQuery>(
    GET_PORTFOLIO_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!portfolio) return { notFound: true }

  return {
    props: {
      portfolio
    }
  }
}
