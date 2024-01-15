import * as types from "./actionTypes";

export const createTask = (taskDetails) => (dispatch) => {
  dispatch({ type: types.CREATE_TASK, payload: taskDetails });
};

export const deleteTask = (taskDetails) => (dispatch) => {
  dispatch({ type: types.DELETE_TASK, payload: taskDetails });
};

export const promoteTask = (taskDetails) => (dispatch) => {
  dispatch({ type: types.PROMOTE_TASK, payload: taskDetails });
};