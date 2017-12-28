import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap'

class sideMenu extends React.Component {
  render() {
    return (
    	<div className="navigationAdmin">
	        <Nav bsStyle="pills" stacked activeKey={1}>
		        <LinkContainer activeClassName="active" to="/home">
	        		<NavItem eventKey={1}>Home</NavItem>
		        </LinkContainer>
		        <LinkContainer activeClassName="active" to="/tests">
	        		<NavItem eventKey={2}>Tests</NavItem>
		        </LinkContainer>
		        <LinkContainer activeClassName="active" to="/students">
	        		<NavItem eventKey={3}>Students</NavItem>
		        </LinkContainer>
		        <LinkContainer activeClassName="active" to="/student-groups">
	        		<NavItem eventKey={4}>Student Group</NavItem>
		        </LinkContainer>
		  </Nav>
		</div>
    );
  }
}

export default sideMenu;