import Link from 'next/link'

import * as S from './styles'

export type ArticleProps = {
  date: string
  title: string
  slug: string
}

const Article = ({ date, slug, title }: ArticleProps) => {
  return (
    <S.Wrapper>
      <Link href={`/posts/${slug}`} passHref>
        <a>
          <S.Content>
            <S.Date>{date}</S.Date>
            <S.Title>{title}</S.Title>
          </S.Content>
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default Article
