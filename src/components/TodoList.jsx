import { Todo } from "./Todo";

export const TodoList = ({ tasks }) => {
  const status = Object.keys(tasks);
  let items = Object.values(tasks);

  return (
    <div className="todo-list-container">
      {status.map((stat, i) => (
        <div key={i} className="task-container">
          <div className="status-title-container">
            <h2 className="status-title">{stat}</h2>
            <h3 className="status-count">({items[i].length})</h3>
          </div>
          <div className="container">
            {items[i]?.map((task) => (
              <Todo {...task} status={stat} count={stat.length} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
