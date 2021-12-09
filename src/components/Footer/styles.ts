import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Copyright = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
  `}
`
