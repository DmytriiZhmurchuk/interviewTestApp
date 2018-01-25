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
    let btnSize  =  this.props.btnSize  || 'small';
    let btnStyle =  this.props.btnStyle || 'success';
    let btnText  =  this.props.btnText  || "Add New Student";
    let dialogTitle = this.props.title    || "Add New Student";
    return (
      <div style={{display:"inline-block"}}>
        <Button bsStyle={btnStyle} bsSize={btnSize} onClick={() => this.setState({ show: true })} >
         {btnText}
        </Button>
        <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
          	<Modal.Header closeButton>
            	<Modal.Title id="contained-modal-title">{dialogTitle}</Modal.Title>
          	</Modal.Header>
          	<Modal.Body>
          		<Form horizontal>
          			<FormGroup controlId="formHorizontalFirstName">
				      <Col componentClass={ControlLabel} sm={3}>
				        First Name
				      </Col>
				      <Col sm={9}>
				        <FormControl  inputRef={input => this.firstName = input} defaultValue={this.props.firstName} type="text" placeholder="Enter First name"/>
				      </Col>
    				</FormGroup>
				    
				    <FormGroup controlId="formHorizontalLastName">
				      <Col componentClass={ControlLabel} sm={3}>
				        Last Name
				      </Col>
				      <Col sm={9}>
				        <FormControl inputRef={input => this.lastName = input} defaultValue={this.props.lastName} type="text" placeholder="Enter Last name" />
				      </Col>
    				</FormGroup>

    				<FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={3}>
				        Email
				      </Col>
				      <Col sm={9}>
				        <FormControl inputRef={input => this.email = input} defaultValue={this.props.email} type="email" placeholder="Email" />
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