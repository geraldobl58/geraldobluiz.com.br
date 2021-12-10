import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-top: 12rem;

  ${media.lessThan('medium')`
      display: none
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    text-transform: uppercase;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 25%) 1fr;
    margin-top: ${theme.spacings.medium};
    align-items: center;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(6, 5fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    background: ${theme.colors.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
