import React from "react"
import Helmet from "react-helmet"

const fontAwesomeDom = require("@fortawesome/fontawesome-svg-core").dom

export default () => (
  <Helmet>
    <style>{fontAwesomeDom.css()}</style>
  </Helmet>
)
