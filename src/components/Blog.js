import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import chroma from "chroma-js"
import { rhythm, scale } from "../theme/typography"
import { formatReadingTime } from "../utils/helpers"

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: ${rhythm(1 / 4)};
  /* border-bottom: 1.5px solid hsla(0, 0%, 100%, 0.1); */
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
  /* background: hsla(0, 0%, 100%, 0.15); */
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

const Description = styled.p`
  ${scale(-1 / 6)};
  margin-top: ${rhythm(1 / 4)};
`

const Blog = ({ posts, theme }) => {
  return (
    <div style={{ paddingTop: rhythm(1 / 2) }}>
      {posts.map(({ node }) => {
        const post = node
        const title = post.frontmatter.title || post.fields.slug
        return (
          <article key={post.fields.slug}>
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
            <Subtitle>
              {post.frontmatter.date}
              {` • ${formatReadingTime(post.timeToRead)}`}
            </Subtitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />
          </article>
        )
      })}
    </div>
  )
}

export default withTheme(Blog)
