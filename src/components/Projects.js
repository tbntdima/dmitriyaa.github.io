import React from "react"
import { Link } from "gatsby"
import { Box } from "@rebass/grid"
import styled, { withTheme } from "styled-components"
import chroma from "chroma-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
import { rhythm, scale } from "../theme/typography"

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: ${rhythm(1 / 4)};
  border-bottom: 1.5px solid
    ${props =>
      chroma(props.theme.colorAccent)
        .darken()
        .alpha(0.5)};
`

const Title = styled.h3`
  ${scale(1 / 4)};
  margin: 0;
`

const Tag = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  background: ${props => chroma(props.theme.colorAccent).darken(1)};
  color: #fff;
  font-size: 0.7rem;
  line-height: 1;
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`

const Subtitle = styled.small`
  color: ${props => props.theme.colorAccent};
  opacity: 0.85;
`

const ProjectLinks = styled.div`
  margin-top: ${rhythm(1 / 2)};
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

const Description = styled.p`
  ${scale(-1 / 6)};
  margin-top: ${rhythm(1 / 4)};
  margin-bottom: ${rhythm(1 / 3)};
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.img`
  margin-bottom: 0;
  border-radius: 4px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  transform: scale(0.98);
  transition: 0.3s;
  &:hover {
    transform: scale(0.99);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
  }
`

const Projects = ({ posts, theme }) => {
  return (
    <div style={{ paddingTop: rhythm(1 / 2) }}>
      {posts.map(({ node }) => {
        const post = node
        const title = post.frontmatter.title || post.fields.slug

        return (
          <article key={post.fields.slug} style={{ marginBottom: rhythm(1) }}>
            <Link to={post.fields.slug}>
              <TitleWrapper>
                {post.frontmatter.tags.map(tag => (
                  <Tag key={tag} style={{ marginRight: rhythm(1 / 2) }}>
                    {tag}
                  </Tag>
                ))}
                <Title>{title}</Title>
              </TitleWrapper>
            </Link>
            <Subtitle>{post.frontmatter.date}</Subtitle>

            <Description
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />

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
                    <Link
                      to={post.fields.slug}
                      style={{ borderBottom: "none" }}
                    >
                      <Image
                        src={post.frontmatter.mobileImage.publicURL}
                        alt={title}
                      />
                    </Link>
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
                    <Link
                      to={post.fields.slug}
                      style={{ borderBottom: "none" }}
                    >
                      <Image
                        src={post.frontmatter.desktopImage.publicURL}
                        alt={title}
                      />
                    </Link>
                  )}
              </Box>
            </ImagesWrapper>
          </article>
        )
      })}
    </div>
  )
}

export default withTheme(Projects)
