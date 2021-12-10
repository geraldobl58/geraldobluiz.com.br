/* eslint-disable react/no-unescaped-entities */
import TypedHero from 'components/TypedHero'
import * as S from './styles'

const Hero = () => (
  <S.Wrapper>
    <S.LeftSidebar>
      <S.Title>
        <span>👋 Hey, I'm </span> <strong>Geraldo Luiz</strong> a Developer{' '}
        <TypedHero />
      </S.Title>
      <S.Subtitle>
        Sou um desenvolvedor front-end com conhecimento em backend e UX/UI
      </S.Subtitle>
    </S.LeftSidebar>
    <S.RightSidebar>
      <img src="img/icons/person-programmer.svg" alt="Programador" />
    </S.RightSidebar>
  </S.Wrapper>
)

export default Hero
