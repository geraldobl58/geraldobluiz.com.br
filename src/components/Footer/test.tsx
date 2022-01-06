import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render copyright', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByText(/© 2022.Todos os direitos reservados./i)
    ).toBeInTheDocument()
  })
})
