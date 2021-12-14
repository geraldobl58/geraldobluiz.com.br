import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { CardProps } from 'components/Card'

import Heading from 'components/Heading'
import Menu from 'components/Menu'
import Hero from 'components/Hero'
import CardPortfolio from 'components/CardPortfolio'
import SubTitle from 'components/SubTitle'
import Icons from 'components/Icons'
import Footer from 'components/Footer'

import * as S from './styles'

export type HomeTemplateProps = {
  cardPortfolio: CardProps[]
}

const Home = ({ cardPortfolio }: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
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

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
