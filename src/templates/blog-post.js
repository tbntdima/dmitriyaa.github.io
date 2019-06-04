import React, { Component } from "react"
import styled from "styled-components"
import chroma from "chroma-js"
import { Link, graphql } from "gatsby"

import About from "../components/About"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../theme/typography"
import { formatReadingTime } from "../utils/helpers"

const HorizontalLine = styled.hr`
  margin: ${rhythm(1 / 4)} 0;
  border-bottom: 1.5px solid
    ${props =>
      chroma(props.theme.colorAccent)
        .darken()
        .alpha(0.5)};
`

const Title = styled.h1`
  ${scale(1.1)};
  margin: 0;
`
const AdditionalInfo = styled.p`
  ${scale(-1 / 3)};
  display: block;
  margin-bottom: ${rhythm(1)};
  color: ${props => props.theme.colorAccent};
  opacity: 0.85;
`

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark

    // temporary solution until projects template is separated from projects
    // const { previous, next } = this.props.pageContext

    // temporary solution until projects template is separated from projects
    const isBlogPage = post.fileAbsolutePath.includes("/blog/")

    return (
      <Layout isSingleColLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Link to={isBlogPage ? "/#blog" : "/#projects"}>← home</Link>

        <Title>{post.frontmatter.title}</Title>

        <HorizontalLine />

        <AdditionalInfo>
          {post.frontmatter.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </AdditionalInfo>

        <div
          style={{ marginBottom: rhythm(3) }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <HorizontalLine style={{ marginBottom: rhythm(1.5) }} />

        <About
          twitterUsername={this.props.data.site.siteMetadata.social.twitter}
          style={{ marginBottom: rhythm(1) }}
        />

        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fileAbsolutePath
    }
  }
`
