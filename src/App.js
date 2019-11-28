import React from 'react';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import SideBar from './hooks/SideBar'
function App() {
  return (
    <Container>
      <Row>
        <Col lg={3} md={3} sm={2} xs={2} className="column_sideBar">
          <Row>
            <Col lg={2} md={2} sm={2} xs={2}>
            <SideBar />
            </Col>
            <Col lg={10} md={10} sm={10} xs={10}>
          <div>
            <Row className="dropdown_menu" >
              <Col className="dropdown_menu_label" lg={8} md={8} sm={8} xs={8}>
                <h4 className="selected_team">marketing team</h4>
                <span className="team_count">12 members</span>
              </Col>
              <Col className="dropdown_menu_icon" lg="auto" md="auto" sm="auto" xs="auto" >
                 <i className="fa fa-fw fa-home" style={{ fontSize: '1em', marginTop:'100%', cursor:'pointer' }} />
              </Col>
            </Row>
          </div>
            </Col>
          </Row>
        
          </Col>
        <Col lg={6} md={6} sm={7} xs={7}>Content</Col>
        <Col lg={3} md={3} sm={3} xs={3}>Menu</Col>
      </Row>
    </Container>
  );
}

export default App;
