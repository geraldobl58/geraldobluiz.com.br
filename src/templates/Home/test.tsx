import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import portfolioMock from 'components/CardPortfolio/mock'

import Home from '.'

const props = {
  cardPortfolio: [portfolioMock[0]]
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByText(/© 2021.Todos os direitos reservados./i)
    ).toBeInTheDocument()

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
