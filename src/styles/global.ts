import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-100.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-200.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-300.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-regular.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-500.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-600.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-700.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-800.woff2') format('woff2'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v18-latin-900.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothig: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
