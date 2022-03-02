import { NextSeo } from 'next-seo'

import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { CardProps } from 'components/Card'
import { ArticleProps } from 'components/Article'

import Heading from 'components/Heading'
import Hero from 'components/Hero'
import CardPortfolio from 'components/CardPortfolio'
import CardArticle from 'components/CardArticle'
import SubTitle from 'components/SubTitle'
import Icons from 'components/Icons'

import Base from 'templates/Base'

export type HomeTemplateProps = {
  cardPortfolio: CardProps[]
  cardArticle: ArticleProps[]
}

const Home = ({ cardPortfolio, cardArticle }: HomeTemplateProps) => {
  return (
    <>
      <NextSeo
        title="Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps"
        description="Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps"
        canonical="https://www.geraldobluiz.com.br"
        openGraph={{
          url: 'https://www.geraldobluiz.com.br',
          title: 'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps',
          description:
            'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps',
          images: [
            {
              url: 'https://www.geraldobluiz.com.br/img/cover.png',
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
          <Hero />
        </Container>

        <Line />

        {cardPortfolio.length > 0 && (
          <Container>
            <SubTitle>Visite meu portfolio</SubTitle>
            <Heading lineLeft>Meu portfolio</Heading>
            <CardPortfolio items={cardPortfolio} />
          </Container>
        )}

        <Line />

        {cardArticle.length > 0 && (
          <Container>
            <SubTitle>Blog</SubTitle>
            <Heading lineLeft>Confira algumas dicas</Heading>
            <CardArticle items={cardArticle} />
          </Container>
        )}

        <Line />

        <Container>
          <SubTitle>Tecnologias</SubTitle>
          <Heading lineLeft>Algumas tecnologias usadas</Heading>
          <Icons />
        </Container>
      </Base>
    </>
  )
}

export default Home
