import * as actionTypes from './actionTypes';

export const addNewStudent = (student) => {
    return {
        type: actionTypes.ADD_NEW_STUDENT,
       	newStudent:student
    };
};

export const handleAlertDismiss = (student) => {
    return {
        type: actionTypes.HANDLE_ALERT_DISMISS,
       	error:false,
       	errorMsg: ""
    };
};
export const removeStudent = (student) => {
    return {
        type: actionTypes.REMOVE_STUDENT,
        student:student,
       	error:false,
       	errorMsg: ""
    };
};
export const editStudent = (student) => {
    return {
        type: actionTypes.UPDATE_STUDENT,
        student:student,
       	error:false,
       	errorMsg: ""
    };
};

export const openStudent = (student) => {
    return {
        type: actionTypes.OPEN_STUDENT,
        student:student,
       	error:false,
       	errorMsg: ""
    };
};