export const initState = {
  todos: [
    {
      title: "Complete Project Proposal",
      description: "Write and submit the project proposal for approval",
      dueDate: "2024-02-01",
      status: "todo",
    },
    {
      title: "Prepare for Meeting",
      description:
        "Gather necessary documents and information for the client meeting",
      dueDate: "2024-01-20",
      status: "pending",
    },
    {
      title: "Review Code Changes",
      description:
        "Review and test the recent code changes in the development branch",
      dueDate: "2024-01-25",
      status: "pending",
    },
    {
      title: "Send Monthly Report",
      description:
        "Compile and send out the monthly progress report to stakeholders",
      dueDate: "2024-01-31",
      status: "completed",
    },
    {
      title: "Complete Training Modules",
      description:
        "Finish the remaining training modules for professional development",
      dueDate: "2024-02-10",
      status: "pending",
    },
  ],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
