import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import { toggleDarkMode } from "../state/app"

const Homepage = ({ toggleDarkMode }) => (
  <Layout>
    <h1>I'm Dmitriy An</h1>
    <p>Lorem ipsum something</p>
    <p>
      <a href="google.com">Google.com</a>
    </p>
    <button onClick={toggleDarkMode}>Toggle mode</button>
  </Layout>
)

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => {
    dispatch(toggleDarkMode())
  },
})

export default connect(
  null,
  mapDispatchToProps
)(Homepage)
