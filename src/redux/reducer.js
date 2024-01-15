import * as ACTION_TYPES from "./actionTypes";

export const initState = {
  todos: {
    todo: [
      {
        title: "Complete Project Proposal",
        id: 1,
        description: "Write and submit the project proposal for approval",
        dueDate: "2024-02-01",
        status: "todo",
      },
    ],
    pending: [
      {
        title: "Prepare for Meeting",
        id: 3,
        description:
          "Gather necessary documents and information for the client meeting",
        dueDate: "2024-01-20",
        status: "pending",
      },
      {
        title: "Review Code Changes",
        id: 4,
        description:
          "Review and test the recent code changes in the development branch",
        dueDate: "2024-01-25",
        status: "pending",
      },
      {
        title: "Complete Training Modules",
        id: 2,
        description:
          "Finish the remaining training modules for professional development",
        dueDate: "2024-02-10",
        status: "pending",
      },
    ],
    completed: [
      {
        title: "Send Monthly Report",
        id: 5,
        description:
          "Compile and send out the monthly progress report to stakeholders",
        dueDate: "2024-01-31",
        status: "completed",
      },
    ],
  },
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CREATE_TASK:
      return {
        ...state,
        todos: {
          ...state.todos,
          todo: [...state.todos.todo, payload], // payload should contain the new task
        },
      };
    case ACTION_TYPES.UPDATE_TASK:
      return {
        ...state
      };
    default:
      return state;
  }
};
