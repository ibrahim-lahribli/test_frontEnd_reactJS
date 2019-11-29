import React ,{ useState, useEffect, useCallback, useRef }from 'react';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import SideBar from './hooks/SideBar';
import DropdownMenu from './components/DropdownMenu';

function App() {
  const storageData = {
    'My files':['Analytics','Assets','Marketing','Projects'],
    'Shared with me':[],
    'Recent':[],
    'Starred':[],
    'Trash':[],
  };

  return (
    <Container>
      <Row className="row_height">
        <Col lg={3} md={3} sm={2} xs={2} className="column_sideBar">
          <Row className="row_height">
            <Col lg={2} md={2} sm={2} xs={2}>
              <SideBar />
            </Col>
            <Col lg={10} md={10} sm={10} xs={10}>
              <DropdownMenu team="marketing team" teamCount="12"/>
              <h2>Storage</h2>
                {storageData !== null &&
                  Object.keys(storageData).map(key => (
                  <div href="#">
                    <div>{key}</div>
                    {
                      storageData[key].length !== 0 && storageData[key].map(elm =>
                        <div><i className="fa fa-fw fa-home"/><i className="fa fa-fw fa-home"/><span>{elm}</span></div>
                      )
                    }
                    </div>
                  ))}
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
