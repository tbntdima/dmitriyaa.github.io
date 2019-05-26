import React, { Component } from "react"
import { withTheme } from "styled-components"
import Space from "./spaceScript"

class SpaceBackground extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    Space.init(this.canvas.current, this.props.theme.colorSpaceBackgroundStar)
  }

  render() {
    return (
      <canvas
        style={{
          width: "100%",
          height: "100%",
          background: this.props.theme.colorBackground,
          transition: ".3s",
        }}
        ref={this.canvas}
      />
    )
  }
}

export default withTheme(SpaceBackground)
