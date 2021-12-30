import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Article from '.'

const props = {
  date: '22/12/21',
  title:
    'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais',
  slug: 'lorem-ipsum',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
}

describe('<Article />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Article {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
  })
})
