import React from "react"
import { Box } from "@rebass/grid"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"

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
    <Link to="/learnings">Learnings</Link>
  </Layout>
)

export default Homepage
