import React, { Component } from "react"
import styled from "styled-components"
import chroma from "chroma-js"
import { Box } from "@rebass/grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
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

const Description = styled.p`
  margin-bottom: ${rhythm(1 / 3)};
`

const Title = styled.h1`
  ${scale(1.1)};
  margin: 0;
`
const AdditionalInfo = styled.p`
  ${scale(-1 / 3)};
  display: block;
  margin-bottom: ${rhythm(1 / 2)};
  color: ${props => props.theme.colorAccent};
  opacity: 0.85;
`

const ProjectLinks = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
  margin-left: ${rhythm(1 / 4)};
`

const ProjectLink = styled.a`
  margin-right: ${rhythm(1 / 2)};
  border-bottom: none;
  ${scale(-1 / 4)};

  & svg {
    margin-right: ${rhythm(1 / 4)};
    font-size: 1.2rem;
    transition: 0.3s;
  }
  &:hover svg {
    transform: rotate(1turn) scale(1.2);
  }
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.img`
  margin-bottom: 0;
  border-radius: 4px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
`

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const title = post.frontmatter.title

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

        {!isBlogPage && (
          <Description
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          />
        )}

        {(post.frontmatter.githubUrl || post.frontmatter.liveUrl) && (
          <ProjectLinks>
            {post.frontmatter.githubUrl && (
              <ProjectLink
                href={post.frontmatter.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                github
              </ProjectLink>
            )}
            {post.frontmatter.liveUrl && (
              <ProjectLink
                href={post.frontmatter.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWindowRestore} />
                live
              </ProjectLink>
            )}
          </ProjectLinks>
        )}

        <ImagesWrapper>
          <Box
            order={[2, 1, 1]}
            width={[1, 1 / 3, 1 / 3]}
            p={2}
            style={{ textAlign: "center" }}
          >
            {post.frontmatter.mobileImage &&
              post.frontmatter.mobileImage.name !== "no-image" && (
                <Image
                  src={post.frontmatter.mobileImage.publicURL}
                  alt={title}
                />
              )}
          </Box>
          <Box
            order={[1, 2, 2]}
            width={[1, 2 / 3, 2 / 3]}
            p={2}
            style={{ textAlign: "center" }}
          >
            {post.frontmatter.desktopImage &&
              post.frontmatter.desktopImage.name !== "no-image" && (
                <Image
                  src={post.frontmatter.desktopImage.publicURL}
                  alt={title}
                />
              )}
          </Box>
        </ImagesWrapper>

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
      fileAbsolutePath
    }
  }
`
