import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PostsTemplate from '.'

const post = {
  date: '22-12-2021',
  title: 'Lorem Ipsum',
  slug: 'lorem-ipsum',
  description: {
    html: 'Lorem Ipsum is simply dummy'
  }
}

describe('<PageTemplate />', () => {
  it('should render the title and body', () => {
    renderWithTheme(<PostsTemplate post={post} />)

    expect(
      screen.getByRole('heading', { name: post.title })
    ).toBeInTheDocument()

    expect(screen.getByText(/lorem ipsum is simply dummy/i)).toBeInTheDocument()
  })
})
