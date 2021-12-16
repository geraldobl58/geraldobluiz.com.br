import Link from 'next/link'

import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <S.Title>
      Como posso ajudar você e seu negócio com desenvolvimento front-end para
      web e mobile.
    </S.Title>
    <S.Description>E-mail: geraldobl58@gmail.com</S.Description>
    <S.SocialText>
      <S.List>
        <S.Text>
          <Link href="https://github.com/geraldobl58">
            <a target="_blank">Github</a>
          </Link>
        </S.Text>
        <S.Text>
          <Link href="https://www.linkedin.com/in/geraldo-luiz-b626ab31/">
            <a target="_blank">Linkedin</a>
          </Link>
        </S.Text>
      </S.List>
    </S.SocialText>
  </S.Wrapper>
)

export default Contact
