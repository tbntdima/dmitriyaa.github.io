import React from "react"
import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from "./themes"

const ConfiguredThemeProvider = ({ children }) => (
  <ThemeProvider theme={1 > 2 ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
)

export default ConfiguredThemeProvider
