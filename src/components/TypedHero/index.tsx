import Typed from 'react-typed'

import * as S from './styles'

const ROLES = ['NextJS', 'ReactJS', 'Typescript', 'Javascript', 'Frontend', 'Devops']

const TypedHero = () => (
  <S.Wrapper>
    <Typed
      loop
      typeSpeed={70}
      backSpeed={70}
      strings={ROLES}
      backDelay={1000}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  </S.Wrapper>
)

export default TypedHero
