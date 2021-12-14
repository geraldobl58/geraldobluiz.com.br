import { Container } from 'components/Container'
import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import About from 'templates/About'
import Base from 'templates/Base'

const Me = () => (
  <Base>
    <Container>
      <SubTitle>Sobre</SubTitle>
      <Heading lineLeft>Um pouco sobre mim</Heading>
      <About />
    </Container>
  </Base>
)

export default Me
