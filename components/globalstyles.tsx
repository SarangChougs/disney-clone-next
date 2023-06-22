import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body{
  background-color: #040714;
  color: #f9f9f9;

  font-family: Avenir-Roman, sans-serif;
  margin: 0;
  padding: 0;
}

a {
  color: #f9f9f9;
  text-decoration: none;
}

/* media queries */

/* Laptop screen */
@media only screen and (min-width: 768px) {
  body{
      font-size: 16px;
  }
}

/* Tab screen */
@media only screen and (min-width: 480px) and (max-width: 768px) {
  body{
      font-size: 15px;
  }
}

/* Mobile screen */
@media only screen and (max-width: 749px) {
  body{
      font-size: 14px;
  }
}
`

export default GlobalStyle
