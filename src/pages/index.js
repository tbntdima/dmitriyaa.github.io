import React from "react"
import { Box } from "@rebass/grid"
import { withTheme } from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import AnimatedCollapse from "../components/AnimatedCollapse"
import Blog from "../components/Blog"
import Projects from "../components/Projects"
import { rhythm } from "../theme/typography"

class Homepage extends React.Component {
  render() {
    const { location, data } = this.props
    const { blogData, projectsData } = data
    const projectsPosts = projectsData.edges
    const blogPosts = blogData.edges
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
          <Projects posts={projectsPosts} />
        </AnimatedCollapse>

        <AnimatedCollapse title="Blog" currentHash={hash}>
          <Blog posts={blogPosts} />
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
    blogData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            tags
            description
          }
        }
      }
    }
    projectsData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            tags
            description
            githubUrl
            liveUrl
            desktopImage {
              name
              publicURL
            }
            mobileImage {
              name
              publicURL
            }
          }
        }
      }
    }
  }
`
