import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'background-dark',
    values: [
      {
        name: 'background-light',
        value: theme.colors.white
      },
      {
        name: 'background-dark',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
