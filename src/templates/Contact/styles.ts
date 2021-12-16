import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const SocialText = styled.div`
  width: 100%;
`

export const List = styled.ul`
  list-style: none;
`

export const Text = styled.li`
  border-bottom: 1px solid #292b2d;

  a {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      text-decoration: none;
      display: block;
      padding: ${theme.spacings.small} 0;
    `}
  }
`
