import React from "react"
import { Box } from "@rebass/grid"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import AnimatedCollapse from "../components/AnimatedCollapse"

class Homepage extends React.Component {
  render() {
    const hash = this.props.location.hash
    return (
      <Layout>
        <SEO title="" />
        <Box
          style={{
            maxWidth: "540px",
          }}
        >
          <Bio />
        </Box>

        <AnimatedCollapse title="Projects" currentHash={hash}>
          <p>projects</p>
        </AnimatedCollapse>
        <AnimatedCollapse title="Blog" currentHash={hash}>
          <p>blog</p>
        </AnimatedCollapse>
        <AnimatedCollapse title="Contact" currentHash={hash}>
          <p>Contacts</p>
        </AnimatedCollapse>
      </Layout>
    )
  }
}

export default Homepage
