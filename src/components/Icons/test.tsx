import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Icons from '.'

describe('<Icons />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Icons />)

    expect(screen.getByRole('img', { name: /reactjs/i })).toBeInTheDocument()
  })
})
