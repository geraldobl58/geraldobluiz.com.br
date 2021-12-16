import { ArticleProps } from 'components/Article'
import CardArticle from 'components/CardArticle'
import { Container } from 'components/Container'

import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import Base from 'templates/Base'

export type NewsTemplateProps = {
  cardArticle: ArticleProps[]
}

const News = ({ cardArticle }: NewsTemplateProps) => (
  <Base>
    <Container>
      <SubTitle>Dicas</SubTitle>
      <Heading lineLeft>Confira algumas dicas e tutoriais</Heading>
      <CardArticle items={cardArticle} />
    </Container>
  </Base>
)

export default News
