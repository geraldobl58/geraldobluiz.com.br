import { Story, Meta } from '@storybook/react/types-6-0'
import Social from '.'

export default {
  title: 'Social',
  component: Social,
  args: {
    title: 'Linkedin',
    icon: 'img/icons/linkedin.svg'
  }
} as Meta

export const Default: Story = (args) => <Social {...args} />
