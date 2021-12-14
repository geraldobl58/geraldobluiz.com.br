import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Base
