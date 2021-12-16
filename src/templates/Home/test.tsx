import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import portfolioMock from 'components/CardPortfolio/mock'
import articleMock from 'components/CardArticle/mock'

import Home from '.'

const props = {
  cardPortfolio: [portfolioMock[0]],
  cardArticle: [articleMock[0]]
}

describe('<Home />', () => {
  it('should render heading', () => {
    renderWithTheme(<Home {...props} />)

    expect(
      screen.getByRole('heading', { name: /visite meu portfolio/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /algumas tecnologias usadas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /confira algumas dicas/i })
    ).toBeInTheDocument()
  })
})
