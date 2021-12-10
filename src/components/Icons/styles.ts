import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.grid.gutter};
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    height: 10rem;
    background: ${theme.colors.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    align-items: center;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(5, 1fr)
    `}
  `}
`
