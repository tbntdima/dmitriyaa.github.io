import React from "react"
import ConfiguredReduxProvider from "./src/state/configuredReduxProvider"
import ConfiguredThemeProvider from "./src/theme/configuredThemeProvider"

export const wrapRootElement = ({ element }) => (
  <ConfiguredReduxProvider>
    <ConfiguredThemeProvider>{element}</ConfiguredThemeProvider>
  </ConfiguredReduxProvider>
)
