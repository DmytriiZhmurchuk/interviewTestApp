import React from 'react';
import { Form, InputGroup, FormGroup, FormControl, Button } from 'react-bootstrap'

class StudentsHeader extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
    	<div>
	      <Form bsClass="search-fullWidth" inline>
		    <FormGroup controlId="formInlineName">
			    <InputGroup>
			        <InputGroup.Button>
			          <Button bsStyle="primary">Search</Button>
			        </InputGroup.Button>
			    <FormControl placeholder="Enter the student name" type="search" />
		        </InputGroup>
		    </FormGroup>
		  </Form>
		  <Form inline>
		    <FormGroup>
			     <Button bsSize='small' bsStyle="success">Add the new student</Button>
		    </FormGroup>
		  </Form>
		</div>  
	 );
    	
  }
}

export default StudentsHeader;