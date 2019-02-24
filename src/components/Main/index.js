// Dependencies
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

// Custom components
import About from '../About/';
import Skills from '../Skills';
import Projects from '../Projects';
import Contributions from '../Contributions';
import Contact from '../Contact';

// Styles
import './index.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={9}>
            <About />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link className="subpage__link" to="/skills">Skills</Link>
            <Route path="/skills" component={Skills} />

            <Link className="subpage__link" to="/projects">Projects</Link>
            <Route path="/projects" component={Projects} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            Transition
            <CSSTransition
              in
              timeout={200}
              classNames="test"
            >
              Hello World
            </CSSTransition>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
