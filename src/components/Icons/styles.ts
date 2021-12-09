import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`
