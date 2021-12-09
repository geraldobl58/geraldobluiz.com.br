import React, { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { Github } from '@styled-icons/bootstrap/Github'
import { Close } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <MediaMatch lessThan="medium">
          <S.IconWrapper>
            <Linkedin aria-label="linkedin" />
          </S.IconWrapper>
          <S.IconWrapper>
            <Github aria-label="github" />
          </S.IconWrapper>
        </MediaMatch>
      </S.MenuGroup>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
          <S.MenuLink href="#">Portfolio</S.MenuLink>
          <S.MenuLink href="#">Blog</S.MenuLink>
          <S.MenuLink href="#">Contato</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Close aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
          <S.MenuLink href="#">Portfolio</S.MenuLink>
          <S.MenuLink href="#">Blog</S.MenuLink>
          <S.MenuLink href="#">Contato</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
