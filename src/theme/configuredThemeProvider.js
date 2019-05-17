import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./globalStyle.js"
import { darkTheme, lightTheme } from "./themes"

const ConfiguredThemeProvider = ({ children }) => (
  <ThemeProvider theme={true ? darkTheme : lightTheme}>
    <Fragment>
      {children}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
)

export default ConfiguredThemeProvider
