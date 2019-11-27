import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col lg={3} md={3} sm={2} xs={2}>sideBar</Col>
        <Col lg={6} md={6} sm={7} xs={7}>Content</Col>
        <Col lg={3} md={3} sm={3} xs={3}>Menu</Col>
      </Row>
    </Container>
  );
}

export default App;
