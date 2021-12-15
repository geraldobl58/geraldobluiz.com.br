import * as S from './styles'

export type ArticleProps = {
  date: string
  title: string
  description?: string
}

const Article = ({ date, title, description }: ArticleProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
    </S.Content>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Article
