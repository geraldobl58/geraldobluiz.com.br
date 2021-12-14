import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { CardProps } from 'components/Card'

import Heading from 'components/Heading'
import Hero from 'components/Hero'
import CardPortfolio from 'components/CardPortfolio'
import SubTitle from 'components/SubTitle'
import Icons from 'components/Icons'

import Base from 'templates/Base'

export type HomeTemplateProps = {
  cardPortfolio: CardProps[]
}

const Home = ({ cardPortfolio }: HomeTemplateProps) => (
  <Base>
    <Container>
      <Hero />
    </Container>

    <Line />

    <Container>
      <SubTitle>Visite meu portfolio</SubTitle>
      <Heading lineLeft>Meu portfolio</Heading>
      <CardPortfolio items={cardPortfolio} />
    </Container>

    <Line />

    <Container>
      <SubTitle>Blog</SubTitle>
      <Heading lineLeft>Confira algumas dicas</Heading>
    </Container>

    <Line />

    <Container>
      <SubTitle>Tecnologias</SubTitle>
      <Heading lineLeft>Algumas tecnologias usadas</Heading>
      <Icons />
    </Container>
  </Base>
)

export default Home
