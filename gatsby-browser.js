import React from "react"
import ConfiguredThemeProvider from "./src/theme/configuredThemeProvider"

export const wrapRootElement = ({ element }) => (
  <ConfiguredThemeProvider>{element}</ConfiguredThemeProvider>
)
