import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Geraldo Luiz/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a yellow label when color is passed', () => {
    renderWithTheme(<Logo color="secondary" />)

    expect(screen.getByLabelText(/Geraldo Luiz/i).parentElement).toHaveStyle({
      color: '#FF9901'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Geraldo Luiz/i).parentElement).toHaveStyle({
      width: '21rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Geraldo Luiz/i).parentElement).toHaveStyle({
      width: '18rem'
    })
  })

  it('should render a bigger logo without text on hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(
      screen.getByLabelText(/Geraldo Luiz/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
