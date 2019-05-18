import React from "react"
import { connect } from "react-redux"
import { Box } from "@rebass/grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { toggleDarkMode } from "../state/app"

const Homepage = ({ toggleDarkMode }) => (
  <Layout>
    <SEO title="" />
    <Box
      style={{
        maxWidth: "540px",
      }}
    >
      <Bio />
    </Box>
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
