import styled, { css } from 'styled-components'

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    line-height: ${theme.spacings.small};

    h3 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.light};
      margin-top: ${theme.spacings.xxlarge};
      margin-bottom: ${theme.spacings.small};
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.spacings.small};
    }

    ul {
      list-style-type: none;

      li {
        border-bottom: 1px solid #292b2d;

        a {
          ${({ theme }) => css`
            color: ${theme.colors.white};
            font-size: ${theme.font.sizes.medium};
            font-weight: ${theme.font.light};
            text-decoration: none;
            display: block;
            padding: ${theme.spacings.small} 0;
          `}
        }
      }
    }
  `}
`
