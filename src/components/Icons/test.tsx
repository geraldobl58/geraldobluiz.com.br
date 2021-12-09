import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Icons from '.'

const props = {
  title: 'Reactjs',
  icon: 'img/icons/react.svg'
}

describe('<Icons />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Icons {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.icon
    )
  })
})
