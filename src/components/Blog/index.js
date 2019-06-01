import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import chroma from "chroma-js"
import { rhythm, scale } from "../../theme/typography"
import { formatReadingTime } from "../../utils/helpers"

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
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <Link to={node.fields.slug}>
              <TitleWrapper>
                <Tag style={{ marginRight: rhythm(1 / 2) }}>regular</Tag>
                <Title>{title}</Title>
              </TitleWrapper>
            </Link>
            <Subtitle>
              {node.frontmatter.date}
              {` • ${formatReadingTime(node.timeToRead)}`}
            </Subtitle>
            <Description
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </article>
        )
      })}
    </div>
  )
}

export default withTheme(Blog)
