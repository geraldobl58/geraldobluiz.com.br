import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Article from '.'

const props = {
  date: '15/12/2021',
  title:
    'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
}

describe('<Article />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Article {...props} />)

    expect(
      screen.getByRole('heading', { name: props.date })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(/lorem ipsum is simply/i)).toBeInTheDocument()
  })
})
