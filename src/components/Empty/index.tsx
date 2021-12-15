import Link from 'next/link'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="Whoops: Página não encontrada!"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <S.LinkHref>Ir para a home</S.LinkHref>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
