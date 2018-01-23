import * as actionTypes from './actionTypes';

export const addNewStudent = (student) => {
    return {
        type: actionTypes.ADD_NEW_STUDENT,
       	newStudent:student
    };
};