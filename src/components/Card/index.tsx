import Link from 'next/link'

import * as S from './styles'

export type CardProps = {
  title: string
  slug: string
  tag: string
  cover: {
    url: string
  }
}

const Card = ({ title, slug, tag, cover }: CardProps) => {
  return (
    <S.Wrapper>
      <Link href={`/portfolio/${slug}`} passHref>
        <a>
          <S.ImageBox>
            <img src={cover.url} alt={title} />
          </S.ImageBox>
          <S.Content>
            <S.Info>
              <S.Subtitle>{tag}</S.Subtitle>
              <S.Title>{title}</S.Title>
            </S.Info>
          </S.Content>
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default Card
