import React from "react"
import { Box } from "@rebass/grid"
import { withTheme } from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import AnimatedCollapse from "../components/AnimatedCollapse"
import Blog from "../components/Blog"
import { rhythm } from "../theme/typography"

class Homepage extends React.Component {
  render() {
    const { location, data } = this.props
    const posts = data.allMarkdownRemark.edges
    const hash = location.hash

    return (
      <Layout>
        <SEO title="" />
        <Box
          style={{
            maxWidth: "540px",
          }}
          mb={rhythm(1.25)}
        >
          <Bio />
        </Box>

        <AnimatedCollapse title="Projects" currentHash={hash}>
          <p>projects</p>
        </AnimatedCollapse>

        <AnimatedCollapse title="Blog" currentHash={hash}>
          <Blog posts={posts} />
        </AnimatedCollapse>

        <AnimatedCollapse title="Contact" currentHash={hash}>
          <p>Contacts</p>
        </AnimatedCollapse>
      </Layout>
    )
  }
}

export default withTheme(Homepage)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
