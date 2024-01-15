import { useDispatch } from "react-redux";
import { getTabColour } from "../utils/utils";
import { deleteTask, promoteTask } from "../redux/action";

export const Todo = ({ title, description, dueDate, status, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ id, status }));
  };
  const handlePromote = () => {
    dispatch(promoteTask({ id, status }));
  };

  return (
    <>
      <div className="task-card">
        <div className="top-container">
          <h3>{title}</h3>
          <button onClick={(e) => handleDelete()} className="delete-todo">
            {" "}
            X{" "}
          </button>
        </div>
        <p>{description}</p>
        <p>{dueDate}</p>
        <div className="bottom-container">
          <p
            className="status-tag"
            style={{ backgroundColor: getTabColour(status) }}
          >
            {status}
          </p>
          {status !== "completed" ? (
            <button className="update-todo" onClick={e => handlePromote()}> => </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
