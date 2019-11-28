import React from 'react';
import {Row, Col } from 'react-bootstrap';
import './Dropdown.css';

function DropdownMenu(props) {
    return (
            <Row className="dropdown_menu" >
              <Col className="dropdown_menu_label" lg={8} md={8} sm={8} xs={8}>
                <h4 className="selected_team">{props.team}</h4>
                <span className="team_count">{`${props.teamCount} members`}</span>
              </Col>
              <Col className="dropdown_menu_icon" lg="auto" md="auto" sm="auto" xs="auto" >
                 <i className="fa fa-fw fa-home" style={{ fontSize: '1em', marginTop:'100%', cursor:'pointer' }} />
              </Col>
            </Row>
    )
}
export default DropdownMenu;