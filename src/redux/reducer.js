import * as ACTION_TYPES from "./actionTypes";

const todos = localStorage.getItem("state");

export const initState = {
  todos: {
    todo: [
      {
        title: "Complete Project Proposal",
        id: 1,
        description: "Write and submit the project proposal for approval",
        dueDate: "2024-02-01",
      },
    ],
    ongoing: [
      {
        title: "Prepare for Meeting",
        id: 3,
        description:
          "Gather necessary documents and information for the client meeting",
        dueDate: "2024-01-20",
      },
      {
        title: "Review Code Changes",
        id: 4,
        description:
          "Review and test the recent code changes in the development branch",
        dueDate: "2024-01-25",
      },
      {
        title: "Complete Training Modules",
        id: 2,
        description:
          "Finish the remaining training modules for professional development",
        dueDate: "2024-02-10",
      },
    ],
    completed: [
      {
        title: "Send Monthly Report",
        id: 5,
        description:
          "Compile and send out the monthly progress report to stakeholders",
        dueDate: "2024-01-31",
      },
    ],
  },
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CREATE_TASK: {
      return {
        ...state,
        todos: {
          ...state.todos,
          todo: [...state.todos.todo, payload],
        },
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { id, status } = payload;
      const updatedTasks = state.todos[status].filter((task) => task.id !== id);
      return {
        ...state,
        todos: {
          ...state.todos,
          [status]: updatedTasks,
        },
      };
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
        return {
          ...state,
          todos: {
            ...state.todos,
            [status]: state.todos[status].filter((task) => task.id !== id),
            [nextStatus]: [...state.todos[nextStatus], taskToPromote],
          },
        };
      }
    }
    default:
      return state;
  }
};
