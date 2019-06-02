import React from "react"
import { Flex, Box } from "@rebass/grid"
import { Link } from "gatsby"

import logo from "../../content/assets/avatar.jpg"
import { rhythm } from "../theme/typography"

const About = ({ twitterUsername, style }) => {
  return (
    <Flex style={style}>
      <Box>
        <img
          src={logo}
          alt="Dmitriy An"
          style={{
            margin: 0,
            marginRight: rhythm(1 / 2),
            maxWidth: "100px",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box style={{ maxWidth: "250px" }}>
        <Link to="/">
          <h3 style={{ margin: 0 }}>dmitriyaa.github.io</h3>
        </Link>
        <p style={{ margin: 0 }}>
          Personal website and blog by{" "}
          <a href={`https://twitter.com/${twitterUsername}`}>Dmitriy An</a>
        </p>
      </Box>
    </Flex>
  )
}

export default About
