import React from 'react';
import { Form, InputGroup, FormGroup, FormControl, Button } from 'react-bootstrap'
import AddNewStudent from './AddNewStudent'

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
		  <AddNewStudent/>
		</div>  
	 );
    	
  }
}

export default StudentsHeader;