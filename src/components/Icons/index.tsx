import * as S from './styles'

export type IconsProps = {
  title?: string
  icon: string
}

const Icons = ({ title, icon }: IconsProps) => (
  <S.Wrapper>
    <S.Icon>
      <img src={icon} alt={title} />
    </S.Icon>
  </S.Wrapper>
)

export default Icons
