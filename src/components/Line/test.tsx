import { renderWithTheme } from 'utils/tests/helpers'

import { Line } from '.'

describe('<Line />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Line />)

    expect(container.firstChild).toHaveStyleRule('max-width', '125rem')

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 125rem;
        margin-left: auto;
        margin-right: auto;
        border-top: 1px solid #292b2d;
      }

      <div
        class="c0"
      />
    `)
  })
})
