import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xlarge};
    padding: 0 100px;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Date = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};

    img {
      width: 100%;
      height: 100%;
      margin-bottom: ${theme.spacings.small};
      margin-top: ${theme.spacings.small};
    }
  `}
`
