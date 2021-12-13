import { Story, Meta } from '@storybook/react/types-6-0'
import { CardProps } from 'components/Card'
import CardPortfolio from '.'

import items from './mock'

export default {
  title: 'CardPortfolio',
  component: CardPortfolio,
  args: { items }
} as Meta

export const Default: Story<CardProps[]> = (args) => (
  <div style={{ width: '130rem', margin: '0 auto' }}>
    <CardPortfolio items={args} {...args} />
  </div>
)
