import { Container } from 'components/Container'
import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import Contact from 'templates/Contact'
import Base from 'templates/Base'

const ContactInfo = () => (
  <Base>
    <Container>
      <SubTitle>Contato</SubTitle>
      <Heading lineLeft>Mande sua dúvida</Heading>
      <Contact />
    </Container>
  </Base>
)

export default ContactInfo
