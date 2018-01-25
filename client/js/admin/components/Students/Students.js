import React from 'react';
import StudentsHeader from './StudentsHeader';
import StudentsList from './StudentsList';
import * as actions from '../../store/actions/students/Actions';
import { connect } from 'react-redux';
import WarningAlert from '../../UI/WarningAlert';

class Students extends React.Component {
  render() {
    return (
    	<div className="panel panel-default fullHeight">
   			<div className="panel-heading">
   				<StudentsHeader addNewStudent= {this.props.onAddNewStudent}/>
   			</div>
  			<div className="panel-body">
          <WarningAlert 
                errorMsg= {this.props.errorMsg}
                alertVisible= {this.props.error}
                handleAlertDismiss={this.props.handleAlertDismiss}/>
   				<StudentsList 
            studentsList={this.props.students}
            onOpen={this.props.onStudentOpen}
            onEdit={this.props.onStudentEdit}
            onDelete={this.props.onStudentDelete}/>
  			</div>	
    	</div>	
	 );
    	
  }
}

const mapStateToProps = state => {
    return {
        students: state.studentsList.students,
        error: state.studentsList.error,
        errorMsg: state.studentsList.errorMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNewStudent: (student) => dispatch(actions.addNewStudent(student)),
        handleAlertDismiss: () => dispatch(actions.handleAlertDismiss()),
        onStudentOpen: (student) => dispatch(actions.openStudent(student)),
        onStudentEdit: (student,idx) => dispatch(actions.editStudent(student,idx)),
        onStudentDelete: (student) => dispatch(actions.removeStudent(student))
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Students);
