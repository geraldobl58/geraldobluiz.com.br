import * as S from './styles'

export type SocialProps = {
  title?: string
  icon: string
}

const Social = ({ title, icon }: SocialProps) => (
  <S.Wrapper>
    <img src={icon} alt={title} />
  </S.Wrapper>
)

export default Social
