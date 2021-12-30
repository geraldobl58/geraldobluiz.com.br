import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PortfolioTemplate from '.'

const gallery = [
  {
    url: 'https://media.graphcms.com/LDrolgqTh2VzRdk1pNWa'
  },
  {
    url: 'https://media.graphcms.com/wSKavWOaT5quyQatkfI6'
  }
]

const portfolio = {
  tag: 'Desenvolvimento',
  title: 'Mobile app landing design & app maintain',
  techs: 'Nextjs, GraphQL',
  slug: 'mobile-app-landing-design-and-app-maintain',
  description: {
    html: 'lorem ipsum has been the'
  },
  cover: {
    url:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80'
  },
  gallery: gallery
}

describe('<PortfolioTemplate />', () => {
  it('should render the title', () => {
    renderWithTheme(<PortfolioTemplate portfolio={portfolio} />)

    expect(
      screen.getByRole('heading', { name: portfolio.title })
    ).toBeInTheDocument()
  })
})
