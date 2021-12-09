import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Meu portfolio</Heading>)

    expect(screen.getByRole('heading', { name: /meu portfolio/i })).toHaveStyle(
      {
        color: '#FAFAFA'
      }
    )
  })

  it('should render a yellow heading when color is passed', () => {
    renderWithTheme(<Heading color="secondary">Meu portfolio</Heading>)

    expect(screen.getByRole('heading', { name: /meu portfolio/i })).toHaveStyle(
      {
        color: '#FF9901'
      }
    )
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Meu portfolio</Heading>)

    expect(screen.getByRole('heading', { name: /meu portfolio/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #FF9901'
      }
    )
  })
})
