import React, { Component } from "react"
import { withTheme } from "styled-components"
import Space from "./spaceScript"

class SpaceBackground extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount() {
    Space.init(this.canvas.current, this.props.theme.colorSpaceBackgroundStars)
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.theme.colorSpaceBackgroundStars !==
      prevProps.theme.colorSpaceBackgroundStars
    ) {
      Space.init(
        this.canvas.current,
        this.props.theme.colorSpaceBackgroundStars
      )
    }
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
