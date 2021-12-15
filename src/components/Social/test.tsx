import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Social from '.'

describe('<Social />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Social />)

    expect(
      screen.getByRole('heading', { name: /minhas redes/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /github/i })).toBeInTheDocument()
  })
})
