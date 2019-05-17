import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.colorMain}
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${props => props.theme.colorMain};
  }
`

export default GlobalStyle
