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
    let save = () => {
      const firstName = this.firstName.value;
      const lastName = this.lastName.value;
      const email = this.email.value
      const obj= {firstName:firstName,lastName:lastName,email:email}
      this.props.onSave(obj);
      close();
    }
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
				        <FormControl  inputRef={input => this.firstName = input} type="text" placeholder="Enter First name"/>
				      </Col>
    				</FormGroup>
				    
				    <FormGroup controlId="formHorizontalLastName">
				      <Col componentClass={ControlLabel} sm={3}>
				        Last Name
				      </Col>
				      <Col sm={9}>
				        <FormControl inputRef={input => this.lastName = input} type="text" placeholder="Enter Last name" />
				      </Col>
    				</FormGroup>

    				<FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={3}>
				        Email
				      </Col>
				      <Col sm={9}>
				        <FormControl inputRef={input => this.email = input} type="email" placeholder="Email" />
				      </Col>
    				</FormGroup>
  				</Form>
          	</Modal.Body>
          	<Modal.Footer>
          		<Button onClick={save}>Save</Button>
            	<Button onClick={close}>Close</Button>
          	</Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default AddNewStudent;