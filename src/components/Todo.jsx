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
          <div className="task-title-container">
            <h3>{title}</h3>
            <p
              className="status-tag"
              style={{ backgroundColor: getTabColour(status) }}
            >
              {status}
            </p>
          </div>
          <button onClick={(e) => handleDelete()} className="delete-todo">
            {" "}
            X{" "}
          </button>
        </div>
        <p>{description}</p>
        <p>{dueDate}</p>
        <div className="bottom-container">
          {status !== "completed" ? (
            <button className="update-todo" onClick={(e) => handlePromote()}>
              {" "}
              &#10145;{" "}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
