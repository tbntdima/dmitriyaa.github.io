import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Flex } from "@rebass/grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faGithubAlt,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { scale } from "../theme/typography"

const SocialLink = styled.a`
  display: inline-flex;
  padding: 0.25rem;
  border-bottom: none;
  ${scale(0.8)};
  line-height: 1;
  transition: 0.5s;
  &:hover {
    transform: rotate(1turn);
  }
  @media (max-width: ${props => props.theme.bp.mobile}) {
    ${scale(0.9)};
  }
`

const SocialBlock = ({ faIcon, ariaLabel, url }) => (
  <SocialLink
    href={url}
    aria-label={`check out my ${ariaLabel} profile`}
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={faIcon} />
  </SocialLink>
)

const Socials = ({ direction, data }) => {
  const socials = data.site.siteMetadata.social

  return (
    <Flex
      flexDirection={direction === "vertical" ? ["row", "column"] : ["row"]}
    >
      <SocialBlock
        faIcon={faGithubAlt}
        url={`https://github.com/${socials.github}`}
        ariaLabel="github"
      />
      <SocialBlock
        faIcon={faTwitterSquare}
        url={`https://twitter.com/${socials.twitter}`}
        ariaLabel="twitter"
      />
      <SocialBlock
        faIcon={faLinkedin}
        url={`https://www.linkedin.com/in/${socials.linkedin}`}
        ariaLabel="linkedin"
      />
      <SocialBlock
        faIcon={faInstagram}
        url={`https://www.instagram.com/${socials.instagram}`}
        ariaLabel="instagram"
      />
    </Flex>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              instagram
              linkedin
            }
          }
        }
      }
    `}
    render={data => <Socials data={data} {...props} />}
  />
)
