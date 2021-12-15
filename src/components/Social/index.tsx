import Link from 'next/link'

import * as S from './styles'

const Social = () => (
  <S.Wrapper>
    <S.Title>Minhas Redes</S.Title>
    <S.Content>
      <S.Column>
        <Link href="https://www.linkedin.com/in/geraldo-luiz-b626ab31/">
          <a target="_blank">
            <img src="img/icons/linkedin.svg" alt="Linkedin" />
          </a>
        </Link>
      </S.Column>
      <S.Column>
        <Link href="https://github.com/geraldobl58/">
          <a target="_blank">
            <img src="img/icons/github.svg" alt="Github" />
          </a>
        </Link>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Social
