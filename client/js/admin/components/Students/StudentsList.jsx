import React from 'react';
import { Table, Button } from 'react-bootstrap';
import AddNewStudent from './AddNewStudent'


class StudentsList extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	let students = this.props.studentsList.map( (student, idx) => {
        return (
        	<tr key={idx}>
	        	<td>{idx}</td>
				<td>{student.firstName}</td>
				<td>{student.lastName}</td>
				<td>{student.email}</td>
				<td width="150"> 	
					<Button bsStyle="success" bsSize="xsmall"  onClick={this.props.onOpen}>Open</Button> {" "}
					<AddNewStudent 
						btnText="Edit" 
						btnStyle="primary" 
						btnSize="xsmall"
						firstName={student.firstName}
						lastName={student.lastName}
						email={student.email}
						title="Edit student"
						onSave={(std_edited) => this.props.onEdit(std_edited,idx) }/>
					{" "}<Button bsStyle="danger"  bsSize="xsmall"  onClick={() => this.props.onDelete(student)}>Delete</Button>
				</td>
			</tr>
		)
  	})
    return (
    	<div>
			<Table  striped bordered condensed hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th width="150">Action</th>
					</tr>
				</thead>
				<tbody>
				    {students}
				</tbody>
			</Table>
		</div>  
	 );
    	
  }
}


export default StudentsList;