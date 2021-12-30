import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PostsTemplate from '.'

const post = {
  date: '22/12/21',
  title: 'Lorem Ipsum',
  slug: 'lorem-ipsum',
  description: {
    html: 'Lorem Ipsum is simply dummy'
  }
}

describe('<PostsTemplate />', () => {
  it('should render the title', () => {
    renderWithTheme(<PostsTemplate post={post} />)

    expect(
      screen.getByRole('heading', { name: post.title })
    ).toBeInTheDocument()
  })
})
