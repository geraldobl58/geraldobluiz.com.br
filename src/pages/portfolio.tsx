import Jobs, { JobsTemplateProps } from 'templates/Jobs'

import portfolioMock from 'components/CardPortfolio/mock'

export default function Portfolio(props: JobsTemplateProps) {
  return <Jobs {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      cardPortfolio: portfolioMock
    }
  }
}
