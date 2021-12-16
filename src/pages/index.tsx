import Home, { HomeTemplateProps } from 'templates/Home'

import portfolioMock from 'components/CardPortfolio/mock'
import articleMock from 'components/CardArticle/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      cardPortfolio: portfolioMock,
      cardArticle: articleMock
    }
  }
}
