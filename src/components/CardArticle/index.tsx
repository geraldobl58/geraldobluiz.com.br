import Article, { ArticleProps } from 'components/Article'
import * as S from './styles'

export type CardArticleProps = {
  items: ArticleProps[]
}

const CardArticle = ({ items }: CardArticleProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Article key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default CardArticle
