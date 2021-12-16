import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardArticle from '.'

const items = [
  {
    date: '15/12/2021',
    title:
      'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  },
  {
    date: '15/12/2021',
    title:
      'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  },
  {
    date: '15/12/2021',
    title:
      'Moderno boilerplate para projetos Next.js escritos em TypeScript e mais',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }
]

describe('<CardArticle />', () => {
  it('should render the cards articles lenght', () => {
    const { container } = renderWithTheme(<CardArticle items={items} />)

    expect(container.querySelectorAll('div > article')).toHaveLength(3)
  })
})
