import React from 'react';
import { Table } from 'react-bootstrap'

class StudentsList extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	let students = this.props.studentsList.map( (student, idx) => {
        return (
        	<tr>
	        	<td>{idx}</td>
				<td>{student.firstName}</td>
				<td>{student.lastName}</td>
				<td>{student.email}</td>
			</tr>
		)
  	})
    return (
    	<div>
			<Table  hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
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