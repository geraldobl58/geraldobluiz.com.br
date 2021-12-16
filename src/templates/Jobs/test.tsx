import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import portfolioMock from 'components/CardPortfolio/mock'

const props = {
  cardPortfolio: [portfolioMock[0]]
}

import Jobs from '.'

describe('<Jobs />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Jobs {...props} />)

    expect(screen.getByRole('heading', { name: /jobs/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /confira aqui alguns trabalhos/i })
    ).toBeInTheDocument()
  })
})
