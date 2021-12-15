import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'titulo default',
  description: 'descricao default'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', { name: /Whoops: Página não encontrada!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /titulo default/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/descricao default/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /ir para a home/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when haslink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /ir para a home/i })
    ).not.toBeInTheDocument()
  })
})
