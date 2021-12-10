import { Container } from 'components/Container'
import { Line } from 'components/Line'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import SubTitle from 'components/SubTitle'

import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Line />

    <Container>
      <SubTitle>Visite meu portfolio</SubTitle>
      <Heading lineLeft>Meu portfolio</Heading>
    </Container>

    <Line />

    <Container>
      <SubTitle>Tecnologias</SubTitle>
      <Heading lineLeft>Algumas tecnologias usadas</Heading>
    </Container>

    <Line />

    <Container>
      <SubTitle>Blog</SubTitle>
      <Heading lineLeft>Confira algumas dicas</Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home