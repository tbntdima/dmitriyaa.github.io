import React, { Component } from "react"

import Layout from "../components/layout"

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <h1>I'm Dmitriy An</h1>
        <p>
          Professional Front-End Web Developer, who is building beautifull,
          clean and modern websites. With use of latest web technologies.
        </p>
        <p>
          I love JavaScript, and currently focused on React library and its
          ecosystem. Although I mainly specialize in Front-End, I have some
          experience with Back-End as well.
          <a href="google.com">Google</a>
        </p>
      </Layout>
    )
  }
}

export default Homepage
