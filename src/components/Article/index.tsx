import * as S from './styles'

export type ArticleProps = {
  date: string
  title: string
}

const Article = ({ date, title }: ArticleProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
    </S.Content>
  </S.Wrapper>
)

export default Article
