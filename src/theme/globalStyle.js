import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colorBackground}
    color: ${props => props.theme.colorText}
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${props => props.theme.colorMain};
  }
`

export default GlobalStyle
