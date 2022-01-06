import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xlarge};

    h3 {
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
    }

    p {
      line-height: ${theme.spacings.small};
    }
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

export const Description = styled.div`
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

    pre {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.gray};
      margin-bottom: ${theme.spacings.small};
      margin-top: ${theme.spacings.small};
      padding: ${theme.spacings.xsmall};

      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      tab-size: 4;
      hyphens: none;
      overflow: auto;
    }
  `}
`
