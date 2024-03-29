import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};

    a {
      text-decoration: none;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding-top: ${theme.spacings.medium};
    border-top: 1px solid #292b2d;
  `}
`

export const Date = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-right: ${theme.spacings.medium};
    transform: translateY(-50%) rotate(-25deg);
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
  `}
`

export const Label = styled.div`
  ${({ theme }) => css``}
`
