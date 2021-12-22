import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PageTemplate from '.'

const props = {
  heading: 'Title',
  subheading: 'Subheading',
  body: 'Description'
}

describe('<PageTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PageTemplate {...props} />)

    expect(
      screen.getByRole('heading', { name: props.heading })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.subheading })
    ).toBeInTheDocument()

    expect(screen.getByText(/Description/i)).toBeInTheDocument()
  })
})
