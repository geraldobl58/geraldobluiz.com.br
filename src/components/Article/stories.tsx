import { Story, Meta } from '@storybook/react/types-6-0'
import Article, { ArticleProps } from '.'

import item from './mock'

export default {
  title: 'Article',
  component: Article,
  args: { ...item }
} as Meta

export const Default: Story<ArticleProps> = (args) => <Article {...args} />
