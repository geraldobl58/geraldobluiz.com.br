import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  tag: 'Desenvolvimento',
  title: 'Mobile app landing design & app maintain',
  slug: 'mobile-app-landing-design-and-app-maintain',
  cover: {
    url:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80'
  }
}

describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...props} />)

    expect(
      screen.getByRole('heading', {
        name: props.tag
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover.url
    )
  })
})
