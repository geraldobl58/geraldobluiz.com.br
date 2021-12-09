import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SubTitle from '.'

describe('<SubTitle />', () => {
  it('should render a yellow heading by default', () => {
    renderWithTheme(<SubTitle>Tecnologias</SubTitle>)

    expect(screen.getByRole('heading', { name: /tecnologias/i })).toHaveStyle({
      color: '#FF9901'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<SubTitle color="white">Tecnologias</SubTitle>)

    expect(screen.getByRole('heading', { name: /tecnologias/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
