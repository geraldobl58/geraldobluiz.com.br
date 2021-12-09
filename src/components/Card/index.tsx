import * as S from './styles'

export type CardProps = {
  title: string
  subtitle: string
  img: string
}

const Card = ({ title, subtitle, img }: CardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Title>{title}</S.Title>
    </S.Info>
  </S.Wrapper>
)

export default Card
