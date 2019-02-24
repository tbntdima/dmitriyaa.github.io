// Dependencies
import React, { Component } from 'react';
import SpaceBackground from './SpaceBackground.js';


class Background extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    SpaceBackground.init(this.canvas.current);
  }

  render() {
    const canvasStyle = {
      position: 'fixed',
      zIndex: 1,
      top: 0, right: 0, bottom: 0, left: 0,
      width: '100vw', height: '100vh',
      background: '#14161e',
    };

    return <canvas style={canvasStyle} ref={this.canvas} />;
  }
}

export default Background;
