import styled from 'styled-components'
import media from 'styled-media-query'

export const TechsContainer = styled.div`
  ${media.lessThan('medium')`
    display: none;
  `}
`
