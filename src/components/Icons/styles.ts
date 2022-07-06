import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.grid.gutter};
  `}

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    background: ${theme.colors.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100%;
    }
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
