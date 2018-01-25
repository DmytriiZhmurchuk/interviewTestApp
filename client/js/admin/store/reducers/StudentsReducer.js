import * as actionTypes from '../actions/students/actionTypes';
import { updateObject } from '../utils';


const initialState = {
   students:[],
   error:false,
   errorMsg:""
};

const addStudent = ( state, action ) => {
    //check if student exists 
    let newArr = state.students.filter((student) =>{
        return (student.firstName === action.newStudent.firstName && student.lastName === action.newStudent.lastName);
    });
    if(newArr.length > 0) {
        return updateObject( state, {error:true, errorMsg:"Student with this name already exists"} );    
    }else {
        let newStudents = state.students.slice();
        newStudents.splice(0, 0, action.newStudent);
        const updatedState = {
            students: newStudents,
            error:false,
            errorMsg:""
        }
        return updateObject( state, updatedState );    
    }
    return state;
};

const removeStudent = ( state, action ) => {
      
    let newStudents = state.students.slice();
    
    let idx = newStudents.find((student) => {
        return (student.firstName === action.student.firstName && student.lastName === action.student.lastName);
    });

    if(idx !== undefined) {
        newStudents.splice(idx, 1);
        const updatedState = {
            students: newStudents,
            error:false,
            errorMsg:""
        }
        return updateObject( state, updatedState );    
    }
    return state;
};

const updateStudent = ( state, action ) => {
    
    let newStudents = state.students.map( (item, index) => {
        if(index !== action.idx) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.student
        };    
    });
    return updateObject( state, {students: newStudents}); 
};

const handleAlertDismiss= (state, action) => {
    return updateObject( state, {error:action.error, errorMsg:action.errorMsg} );    
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_NEW_STUDENT: 
        	return addStudent( state, action );
        case actionTypes.REMOVE_STUDENT: 
        	return removeStudent(state, action);
        case actionTypes.UPDATE_STUDENT:
        	return updateStudent(state, action);
        case actionTypes.HANDLE_ALERT_DISMISS:
              return handleAlertDismiss(state, action);
        default: return state;
    }
};

export default reducer;