import * as S from './styles'

export type SubTitleProps = {
  children: React.ReactNode
  color?: 'white' | 'secondary'
}

const SubTitle = ({ children, color = 'secondary' }: SubTitleProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default SubTitle
