import { Todo } from "./Todo";

export const TodoList = ({ tasks }) => {
  return (
    <div className="todo-list-container">
      {tasks.map((task) => (
        <Todo {...task} />
      ))}
    </div>
  );
};
