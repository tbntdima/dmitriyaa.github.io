import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Socials = ({ direction, data }) => {
  return <div>{data.site.siteMetadata.social.twitter}</div>
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => <Socials data={data} {...props} />}
  />
)
