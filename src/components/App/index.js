// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Custom components
import Background from '../Background/';
import Sidebar from '../Sidebar/';
import Main from '../Main/';

// Styles
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Container className="page__container">
          <Row className="page__row transparent">
            <Col className="page__col page__col--left" xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col className="page__col page__col--right pl-auto pl-md-4" xs={12} md={9}>
              <Main />
            </Col>
          </Row>
        </Container>
        <Background />
      </div>
    );
  }
}

export default App;
