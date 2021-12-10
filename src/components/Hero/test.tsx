import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: /sou um desenvolvedor front-end com conhecimento em backend/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /programador/i })
    ).toBeInTheDocument()
  })
})
