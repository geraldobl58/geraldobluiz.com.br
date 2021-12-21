import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import About from 'templates/About'
import Base from 'templates/Base'

export default function Me() {
  return (
    <Base>
      <Container>
        <SubTitle>Sobre</SubTitle>
        <Heading lineLeft>Um pouco sobre mim</Heading>
        <About />
      </Container>
    </Base>
  )
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
