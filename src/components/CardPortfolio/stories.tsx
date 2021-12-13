import { Story, Meta } from '@storybook/react/types-6-0'
import { CardProps } from 'components/Card'
import CardPortfolio from '.'

const items = [
  {
    subtitle: 'Desenvolvimento',
    title: 'Mobile app landing design & app maintain',
    img:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80'
  },
  {
    subtitle: 'Desenvolvimento',
    title: 'Mobile app landing design & app maintain',
    img:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80'
  },
  {
    subtitle: 'Desenvolvimento',
    title: 'Mobile app landing design & app maintain',
    img:
      'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80'
  }
]

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
