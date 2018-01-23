import * as actionTypes from '../actions/students/actionTypes';
import { updateObject } from '../utils';


const initialState = {
   students:[]
};

const addStudent = ( state, action ) => {
    let newStudents = state.students.slice();
    newStudents.splice(0, 0, action.newStudent);
    const updatedState = {
    	students: newStudents
    }
    return updateObject( state, updatedState );
};

const removeStudent = ( state, action ) => {
   
};

const updateStudent = ( state, action ) => {
   
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_NEW_STUDENT: 
        	return addStudent( state, action );
        case actionTypes.REMOVE_STUDENT: 
        	return removeStudent(state, action);
        case actionTypes.UPDATE_STUDENT:
        	return updateStudent(state, action);    
        default: return state;
    }
};

export default reducer;