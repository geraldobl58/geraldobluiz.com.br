import { NextSeo } from 'next-seo'

type ImageProps = {
  url: string
}

export type PortfolioTemplateProps = {
  portfolio: {
    tag: string
    title: string
    slug: string
    techs: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

import * as S from './styles'

export default function PortfolioTemplate({
  portfolio
}: PortfolioTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${portfolio.title} - Geraldo Luiz`}
        description={
          portfolio.description?.text ||
          'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }
        canonical="https://www.geraldobluiz.com.br"
        openGraph={{
          url: 'https://www.geraldobluiz.com.br',
          title: `${portfolio.title} - Geraldo Luiz`,
          description:
            portfolio.description?.text ||
            'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }}
      />
      <S.Wrapper>
        <S.Title>{portfolio.title}</S.Title>
        <S.Container>
          <S.Tag>
            <h3>Projeto</h3>
            <p>{portfolio.tag}</p>
          </S.Tag>
          <S.Techs>
            <h3>Tecnologias</h3>
            <p>{portfolio.techs}</p>
          </S.Techs>
        </S.Container>
        <S.Description
          dangerouslySetInnerHTML={{
            __html: portfolio.description?.html || ''
          }}
        />

        <S.Gallery>
          {portfolio.gallery.map((image, index) => (
            <img key={`photo-${index}`} src={image.url} alt={portfolio.title} />
          ))}
        </S.Gallery>
      </S.Wrapper>
    </>
  )
}
