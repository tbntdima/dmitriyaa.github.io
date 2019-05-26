import React from "react"
import { rhythm } from "../theme/typography"

const Bio = () => {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>I'm Dmitriy An</h1>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        Professional self-taught <em>Frontend Developer</em>, who is building
        beautiful, clean and modern websites.
      </p>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        I love <em>JavaScript</em>, and currently specialized at{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        library and its ecosystem.
      </p>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        Currently working{" "}
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
