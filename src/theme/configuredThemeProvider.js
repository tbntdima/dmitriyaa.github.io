import React, { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"

import GlobalStyle from "./globalStyle.js"
import { darkTheme, lightTheme } from "./themes"

const ConfiguredThemeProvider = ({ isDarkMode, children }) => {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Fragment>
        {children}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ app }) => ({
  isDarkTheme: app.isDarkTheme,
})

export default connect(
  mapStateToProps,
  null
)(ConfiguredThemeProvider)
