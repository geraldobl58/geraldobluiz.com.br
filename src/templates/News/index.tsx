import { NextSeo } from 'next-seo'

import { ArticleProps } from 'components/Article'
import { Container } from 'components/Container'
import CardArticle from 'components/CardArticle'

import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import Base from 'templates/Base'

export type NewsTemplateProps = {
  cardArticle: ArticleProps[]
}

const News = ({ cardArticle }: NewsTemplateProps) => {
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
          <SubTitle>Blog</SubTitle>
          <Heading lineLeft>Confira algumas dicas e tutoriais</Heading>
          <CardArticle items={cardArticle} />
        </Container>
      </Base>
    </>
  )
}

export default News
