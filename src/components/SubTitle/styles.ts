import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { SubTitleProps } from '.'

export const Wrapper = styled.h5<SubTitleProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.light};
    `}
  `}
`
