import React from 'react';
import { Modal, Button, Checkbox, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'

class AddNewStudent extends React.Component {
  constructor(props) {
  	super(props);
  	this.state= {
  		show: false
  	}
  }

  render() {
    let close = () => this.setState({ show: false });
    return (
      <div>
        <Button bsStyle="success" bsSize="small" onClick={() => this.setState({ show: true })} >
         Add Student
        </Button>
        <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
          	<Modal.Header closeButton>
            	<Modal.Title id="contained-modal-title">Add New Student</Modal.Title>
          	</Modal.Header>
          	<Modal.Body>
          		<Form horizontal>
          			
          			<FormGroup controlId="formHorizontalFirstName">
				      <Col componentClass={ControlLabel} sm={3}>
				        First Name
				      </Col>
				      <Col sm={9}>
				        <FormControl type="text" placeholder="Enter First name" />
				      </Col>
    				</FormGroup>
				    
				    <FormGroup controlId="formHorizontalLastName">
				      <Col componentClass={ControlLabel} sm={3}>
				        Last Name
				      </Col>
				      <Col sm={9}>
				        <FormControl type="text" placeholder="Enter Last name" />
				      </Col>
    				</FormGroup>
    				<FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={3}>
				        Email
				      </Col>
				      <Col sm={9}>
				        <FormControl type="email" placeholder="Email" />
				      </Col>
    				</FormGroup>
  				</Form>
          	</Modal.Body>
          	<Modal.Footer>
          		<Button onClick={close}>Save</Button>
            	<Button onClick={close}>Close</Button>
          	</Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default AddNewStudent;