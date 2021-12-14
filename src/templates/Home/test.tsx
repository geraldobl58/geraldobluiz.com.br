import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import portfolioMock from 'components/CardPortfolio/mock'

import Home from '.'

const props = {
  cardPortfolio: [portfolioMock[0]]
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

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
