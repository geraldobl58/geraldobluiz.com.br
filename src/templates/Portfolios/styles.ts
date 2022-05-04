import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xlarge};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.small};

    ${media.lessThan('medium')`
      display: block;
    `}
  `}
`

export const Tag = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Techs = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const LinkWeb = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};

    a {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.spacings.small};
    }
  `}
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: 3rem;

  img {
    width: 100%;
    height: 100%;
    background: #f6f7f8;
    border-radius: 9px;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
