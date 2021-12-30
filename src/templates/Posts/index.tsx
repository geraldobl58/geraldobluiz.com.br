import dateFormatted from 'utils/dateFormatted'

import * as S from './styles'

export type PostsTemplateProps = {
  post: {
    date: string
    title: string
    slug: string
    description: {
      html: string
    }
  }
}

export default function PostsTemplate({ post }: PostsTemplateProps) {
  return (
    <S.Wrapper>
      <S.Title>{post.title}</S.Title>
      <S.Date>Postado em: {dateFormatted(post.date)}</S.Date>
      <S.Description
        dangerouslySetInnerHTML={{ __html: post.description.html }}
      />
    </S.Wrapper>
  )
}
