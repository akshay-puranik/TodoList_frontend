import * as ACTION_TYPES from "./actionTypes";

const todos = JSON.parse(localStorage.getItem("state"));

export const initState = todos

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CREATE_TASK: {
      let newState = {
        ...state,
        todos: {
          ...state.todos,
          todo: [...state.todos.todo, payload],
        },
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { id, status } = payload;
      const updatedTasks = state.todos[status].filter((task) => task.id !== id);
      let newState = {
        ...state,
        todos: {
          ...state.todos,
          [status]: updatedTasks,
        },
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    case ACTION_TYPES.PROMOTE_TASK: {
      const { id, status } = payload;
      const taskToPromote = state.todos[status].find((task) => task.id === id);

      const nextStatus =
        status === "todo"
          ? "ongoing"
          : status === "ongoing"
          ? "completed"
          : null;
      if (nextStatus) {
        let newState = {
          ...state,
          todos: {
            ...state.todos,
            [status]: state.todos[status].filter((task) => task.id !== id),
            [nextStatus]: [...state.todos[nextStatus], taskToPromote],
          },
        };
        localStorage.setItem("state", JSON.stringify(newState));
        return newState;
      }
    }
    default:
      return state;
  }
};
