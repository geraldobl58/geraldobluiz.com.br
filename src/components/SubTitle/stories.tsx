import { Story, Meta } from '@storybook/react/types-6-0'
import SubTitle, { SubTitleProps } from '.'

export default {
  title: 'SubTitle',
  component: SubTitle,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SubTitleProps> = (args) => <SubTitle {...args} />

Default.args = {
  children: 'Tecnologias'
}
