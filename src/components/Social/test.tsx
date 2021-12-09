import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Social from '.'

const props = {
  title: 'Reactjs',
  icon: 'img/icons/react.svg'
}

describe('<Social />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Social {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.icon
    )
  })
})
