// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="color--accent">I'm Dmitriy An</h1>
        <p>Professional <span>Front-End Web Developer</span>, who is building beautifull, clean and modern websites. With use of latest web technologies.</p>
        <p>I love <span>JavaScript</span>, and currently focused on <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> library and its ecosystem. Although I mainly specialize in <span>Front-End</span>, I have some experience with <span>Back-End</span> as well.</p>
      </div>
    );
  }
}

export default About;
