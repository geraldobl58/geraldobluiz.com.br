import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  subheading: string
  body: string
}

const PageTemplate = ({ heading, subheading, body }: PageTemplateProps) => (
  <S.Wrapper>
    <SubTitle>{heading}</SubTitle>
    <Heading lineLeft>{subheading}</Heading>
    <S.Description dangerouslySetInnerHTML={{ __html: body }}></S.Description>
  </S.Wrapper>
)

export default PageTemplate
