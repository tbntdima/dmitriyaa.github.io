// Dependencies
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AccordionRoute from '../AccordionRoute/';
import AccortionLink from '../AccordionLink/';

// Custom components
import About from '../About/';
import Skills from '../Skills';
import Projects from '../Projects';
import Contributions from '../Contributions/';
import Contact from '../Contact/';

// Styles
import './index.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={9} className="mb-3">
            <About />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <AccortionLink to="/skills" className="subpage__link">Skills</AccortionLink>
            <AccordionRoute exact path="/skills" component={Skills}/>

            <AccortionLink to="/projects" className="subpage__link">Projects</AccortionLink>
            <AccordionRoute path="/projects" component={Projects}/>

            <AccortionLink to="/contributions" className="subpage__link">Contributions</AccortionLink>
            <AccordionRoute path="/contributions" component={Contributions}/>

            <AccortionLink to="/contact" className="subpage__link">Contact</AccortionLink>
            <AccordionRoute path="/contact" component={Contact}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
