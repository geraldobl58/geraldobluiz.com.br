import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import News from '.'

import articleMock from 'components/CardArticle/mock'

const props = {
  cardArticle: [articleMock[0]]
}

describe('<News />', () => {
  it('should render heading', () => {
    renderWithTheme(<News {...props} />)

    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /confira algumas dicas e tutoriais/i
      })
    ).toBeInTheDocument()
  })
})
