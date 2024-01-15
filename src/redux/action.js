import * as types from "./actionTypes";

export const createTask = (taskDetails) => (dispatch) => {
  dispatch({ type: types.CREATE_TASK, payload: taskDetails });
};

export const updateTask = (taskDetails) => (dispatch) => {
  dispatch({ type: types.UPDATE_TASK, payload: taskDetails });
};
