import Link from 'next/link'

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
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/me" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>
          <Link href="/portfolio" passHref>
            <S.MenuLink>Portfolio</S.MenuLink>
          </Link>
          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>
          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Close aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/me" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>
          <Link href="/portfolio" passHref>
            <S.MenuLink>Portfolio</S.MenuLink>
          </Link>
          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>
          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
