import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    margin-top: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
      font-weight: ${theme.font.normal};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
  `}
`
