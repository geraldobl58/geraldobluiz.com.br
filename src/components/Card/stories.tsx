import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

import item from './mock'

export default {
  title: 'Card',
  component: Card,
  args: { ...item }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '38rem' }}>
    <Card {...args} />
  </div>
)
