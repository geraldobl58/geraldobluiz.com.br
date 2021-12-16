import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the heading and social media', () => {
    renderWithTheme(<Contact />)

    expect(
      screen.getByText(
        /Como posso ajudar você e seu negócio com desenvolvimento front-end para web e mobile./i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(/E-mail: geraldobl58@gmail.com/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })
})
