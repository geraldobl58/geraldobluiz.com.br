import News, { NewsTemplateProps } from 'templates/News'

import articleMock from 'components/CardArticle/mock'

export default function Blog(props: NewsTemplateProps) {
  return <News {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      cardArticle: articleMock
    }
  }
}
