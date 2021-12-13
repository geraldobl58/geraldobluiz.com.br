import Card, { CardProps } from 'components/Card'

import * as S from './styles'

type CardPortfolioProps = {
  items: CardProps[]
}

const CardPortfolio = ({ items }: CardPortfolioProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default CardPortfolio
