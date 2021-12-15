import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import About from '.'

describe('<About />', () => {
  it('should render the heading', () => {
    renderWithTheme(<About />)

    expect(screen.getByRole('heading', { name: /me/i })).toBeInTheDocument()

    expect(screen.getByText(/entusiasta desenvolvedor/i)).toBeInTheDocument()
  })
})
