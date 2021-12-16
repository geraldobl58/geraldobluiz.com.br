import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'
import CardPortfolio from 'components/CardPortfolio'

import Base from 'templates/Base'

export type JobsTemplateProps = {
  cardPortfolio: CardProps[]
}

const Jobs = ({ cardPortfolio }: JobsTemplateProps) => (
  <Base>
    <Container>
      <SubTitle>Jobs</SubTitle>
      <Heading lineLeft>Confira aqui alguns trabalhos</Heading>
      <CardPortfolio items={cardPortfolio} />
    </Container>
  </Base>
)

export default Jobs
