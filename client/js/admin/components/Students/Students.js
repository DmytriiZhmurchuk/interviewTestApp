import React from 'react';
import StudentsHeader from './StudentsHeader';
import StudentsList from './StudentsList';
import * as actions from '../../store/actions/students/Actions';
import { connect } from 'react-redux';

class Students extends React.Component {
  render() {
     console.log(this.props)
    return (

    	<div className="panel panel-default fullHeight">
 			<div className="panel-heading">
 				<StudentsHeader addNewStudent= {this.props.onAddNewStudent}/>
 			</div>
			<div className="panel-body">
 				<StudentsList studentsList={this.props.students}/>
			</div>	
    	</div>	
	 );
    	
  }
}

const mapStateToProps = state => {
    return {
        students: state.studentsList.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNewStudent: (student) => dispatch(actions.addNewStudent(student)),
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Students);
