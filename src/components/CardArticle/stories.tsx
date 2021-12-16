import { Story, Meta } from '@storybook/react/types-6-0'
import { ArticleProps } from 'components/Article'
import CardArticle from '.'

import items from './mock'

export default {
  title: 'CardArticle',
  component: CardArticle,
  args: { items }
} as Meta

export const Default: Story<ArticleProps[]> = (args) => (
  <CardArticle items={args} {...args} />
)
