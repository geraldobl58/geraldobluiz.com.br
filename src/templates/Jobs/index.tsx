import { NextSeo } from 'next-seo'

import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'
import CardPortfolio from 'components/CardPortfolio'

import Base from 'templates/Base'

export type JobsTemplateProps = {
  cardPortfolio: CardProps[]
}

const Jobs = ({ cardPortfolio }: JobsTemplateProps) => {
  return (
    <>
      <NextSeo
        title="Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps"
        description="Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps"
        canonical="https://geraldoluiz.dev"
        openGraph={{
          url: 'https://geraldoluiz.dev',
          title: 'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps',
          description:
            'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps',
          images: [
            {
              url: 'https://geraldoluiz.dev/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Geraldo Luiz'
            }
          ],
          site_name: 'Geraldo Luiz'
        }}
      />
      <Base>
        <Container>
          <SubTitle>Jobs</SubTitle>
          <Heading lineLeft>Confira aqui alguns trabalhos</Heading>
          <CardPortfolio items={cardPortfolio} />
        </Container>
      </Base>
    </>
  )
}

export default Jobs
