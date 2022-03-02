import { NextSeo } from 'next-seo'

import Heading from 'components/Heading'
import SubTitle from 'components/SubTitle'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  subheading: string
  body: string
}

const PageTemplate = ({ heading, subheading, body }: PageTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${heading} - Geraldo Luiz`}
        description={
          heading ||
          'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }
        canonical="https://www.geraldobluiz.com.br"
        openGraph={{
          url: 'https://www.geraldobluiz.com.br',
          title: `${heading} - Geraldo Luiz`,
          description:
            subheading ||
            'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps'
        }}
      />
      <SubTitle>{heading}</SubTitle>
      <Heading lineLeft>{subheading}</Heading>
      <S.Description dangerouslySetInnerHTML={{ __html: body }}></S.Description>
    </>
  )
}

export default PageTemplate
