import React from "react"
import { rhythm } from "../theme/typography"
import styled from "styled-components"

const CustomEM = styled.em`
  color: ${props => props.theme.colorMain};
  font-style: normal;
`

const Bio = () => {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>I'm Dmitriy An</h1>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        Professional self-taught <CustomEM>Frontend Developer</CustomEM>, who is
        building beautiful, clean and modern websites.
      </p>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        I love <CustomEM>JavaScript</CustomEM>, and currently specialized at{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        library and its huge ecosystem.
      </p>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        Working on{" "}
        <a
          href="https://www.strv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @STRV
        </a>
      </p>
    </div>
  )
}

export default Bio
