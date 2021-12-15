import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    line-height: ${theme.spacings.small};
  `}
`
