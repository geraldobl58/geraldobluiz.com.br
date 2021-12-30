import Jobs, { JobsTemplateProps } from 'templates/Jobs'

import { GetPortfoliosQuery } from 'graphql/generated/graphql'
import { GET_PORTFOLIOS } from 'graphql/queries'
import client from 'graphql/client'

export default function Portfolio(props: JobsTemplateProps) {
  return <Jobs {...props} />
}

export const getStaticProps = async () => {
  const { portfolios } = await client.request<GetPortfoliosQuery>(
    GET_PORTFOLIOS
  )

  return {
    props: {
      cardPortfolio: portfolios
    }
  }
}
