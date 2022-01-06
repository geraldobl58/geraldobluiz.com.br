import { NextSeo } from 'next-seo'

import dateFormatted from 'utils/dateFormatted'

import * as S from './styles'

export type PostsTemplateProps = {
  post: {
    date: string
    title: string
    slug: string
    description?: {
      html: string
      text: string
    }
  }
}

export default function PostsTemplate({ post }: PostsTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${post.title} - Geraldo Luiz`}
        description={
          post.description?.text ||
          'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }
        canonical="https://geraldoluiz.dev"
        openGraph={{
          url: 'https://geraldoluiz.dev',
          title: `${post.title} - Geraldo Luiz`,
          description:
            post.description?.text ||
            'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }}
      />
      <S.Wrapper>
        <S.Title>{post.title}</S.Title>
        <S.Date>Postado em: {dateFormatted(post.date)}</S.Date>
        <S.Description
          dangerouslySetInnerHTML={{ __html: post.description?.html || '' }}
        />
      </S.Wrapper>
    </>
  )
}
