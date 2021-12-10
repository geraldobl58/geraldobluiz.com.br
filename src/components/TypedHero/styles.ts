import styled, { css } from 'styled-components'

export const Wrapper = styled.span`
  span {
    span {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        font-weight: ${theme.font.bold};
      `}
    }
  }
`
