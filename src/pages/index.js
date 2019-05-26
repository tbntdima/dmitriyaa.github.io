import React from "react"
import { Box } from "@rebass/grid"
import { withTheme } from "styled-components"
import { Link, graphql } from "gatsby"

import { formatReadingTime } from "../utils/helpers"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import AnimatedCollapse from "../components/AnimatedCollapse"
import { rhythm } from "../theme/typography"

class Homepage extends React.Component {
  render() {
    const { theme, data } = this.props
    const posts = data.allMarkdownRemark.edges
    const hash = this.props.location.hash

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
          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={node.fields.slug}>
                  <Link to={node.fields.slug}>
                    <h3
                      style={{
                        marginTop: rhythm(1 / 2),
                        marginBottom: 0,
                        paddingBottom: rhythm(1 / 4),
                      }}
                    >
                      {title}
                    </h3>
                  </Link>
                  <small style={{ color: theme.colorAccent }}>
                    {node.frontmatter.date}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                  </small>
                  <p
                    style={{
                      marginTop: rhythm(1 / 4),
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </article>
              )
            })}
          </div>
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
