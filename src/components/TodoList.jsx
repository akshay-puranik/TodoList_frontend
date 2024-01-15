import { Todo } from "./Todo";

export const TodoList = ({ tasks }) => {
  const todo = tasks.filter((task) => task.status == "todo");
  const pending = tasks.filter((task) => task.status == "pending");
  const completed = tasks.filter((task) => task.status == "completed");
  let newTasks = [todo, pending, completed];

  return (
    <div className="todo-list-container">
      {newTasks.map((stat, i) => (
        <>
          <div className="container">
            <h2 className="status-title">{stat?.[0]?.status}</h2>
          </div>
          <div className="container">
            {stat?.map((task) => (
              <Todo {...task} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
