import { Story, Meta } from '@storybook/react/types-6-0'
import TypedHero from '.'

export default {
  title: 'TypedHero',
  component: TypedHero
} as Meta

export const Default: Story = (args) => <TypedHero {...args} />
