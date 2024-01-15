import { Todo } from "./Todo";

export const TodoList = ({ tasks }) => {
  const status = Object.keys(tasks);
  let items = Object.values(tasks);
  
  return (
    <div className="todo-list-container">
      {status.map((stat, i) => (
        <>
          <div className="container">
            <h2 className="status-title">{stat}</h2>
          </div>
          <div className="container">
            {items[i]?.map((task) => (
              <Todo {...task} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
