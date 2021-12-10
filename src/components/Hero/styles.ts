import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const LeftSidebar = styled.div``

export const RightSidebar = styled.div`
  ${({ theme }) => css`
    width: 45rem;
    height: 41rem;
    background: ${theme.colors.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      width: 100%;

      img {
        width: 100%;
      }
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 42rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    span {
      font-weight: ${theme.font.light};
    }

    strong {
      color: ${theme.colors.secondary};
      font-weight: ${theme.font.bold};
    }

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    width: 40rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.grid.gutter};

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      margin-bottom: ${theme.grid.gutter};
    `}
  `}
`
