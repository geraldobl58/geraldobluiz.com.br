import { renderWithTheme } from 'utils/tests/helpers'

import TypedHero from '.'

describe('<TypedHero />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TypedHero />)
  })
})
