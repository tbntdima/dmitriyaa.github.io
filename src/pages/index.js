import React from "react"
import { Box } from "@rebass/grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

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
  </Layout>
)

export default Homepage
