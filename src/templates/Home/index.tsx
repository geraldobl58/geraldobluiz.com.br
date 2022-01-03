import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { CardProps } from 'components/Card'
import { ArticleProps } from 'components/Article'

import Heading from 'components/Heading'
import Hero from 'components/Hero'
import CardPortfolio from 'components/CardPortfolio'
import CardArticle from 'components/CardArticle'
import SubTitle from 'components/SubTitle'
import Icons from 'components/Icons'

import Base from 'templates/Base'

export type HomeTemplateProps = {
  cardPortfolio: CardProps[]
  cardArticle: ArticleProps[]
}

const Home = ({ cardPortfolio, cardArticle }: HomeTemplateProps) => (
  <Base>
    <Container>
      <Hero />
    </Container>

    <Line />

    {cardPortfolio.length > 0 && (
      <Container>
        <SubTitle>Visite meu portfolio</SubTitle>
        <Heading lineLeft>Meu portfolio</Heading>
        <CardPortfolio items={cardPortfolio} />
      </Container>
    )}

    <Line />

    {cardArticle.length > 0 && (
      <Container>
        <SubTitle>Blog</SubTitle>
        <Heading lineLeft>Confira algumas dicas</Heading>
        <CardArticle items={cardArticle} />
      </Container>
    )}

    <Line />

    <Container>
      <SubTitle>Tecnologias</SubTitle>
      <Heading lineLeft>Algumas tecnologias usadas</Heading>
      <Icons />
    </Container>
  </Base>
)

export default Home
