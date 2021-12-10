import { Container } from 'components/Container'
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

    <Container>
      <SubTitle>Visite meu portfolio</SubTitle>
      <Heading lineLeft>Meu portfolio</Heading>
    </Container>

    <Container>
      <SubTitle>Tecnologias</SubTitle>
      <Heading lineLeft>Algumas tecnologias usadas</Heading>
    </Container>

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
