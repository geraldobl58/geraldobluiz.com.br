import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    align-items: center;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr)
    `}
  `}
`
