import Link from 'next/link'
import dateFormatted from 'utils/dateFormatted'

import * as S from './styles'

export type ArticleProps = {
  date: string
  title: string
  slug: string
}

const Article = ({ date, slug, title }: ArticleProps) => {
  return (
    <S.Wrapper>
      <Link href={`/post/${slug}`} passHref>
        <a>
          <S.Content>
            <S.Date>{dateFormatted(date)}</S.Date>
            <S.Title>{title}</S.Title>
          </S.Content>
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default Article
