import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
}

export type PortfolioTemplateProps = {
  portfolio: {
    tag: string
    title: string
    slug: string
    techs: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

import * as S from './styles'

export default function PortfolioTemplate({
  portfolio
}: PortfolioTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
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
        dangerouslySetInnerHTML={{ __html: portfolio.description.html }}
      />

      <S.Gallery>
        {portfolio.gallery.map((image, index) => (
          <Image
            key={`photo-${index}`}
            src={image.url}
            alt={portfolio.title}
            width={1000}
            height={800}
            quality={75}
          />
        ))}
      </S.Gallery>
    </S.Wrapper>
  )
}
