import { getTabColour } from "../utils/utils";

export const Todo = ({ title, description, dueDate, status }) => {
  return (
    <>
      <div className="task-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{dueDate}</p>
        <p
          className="status-tag"
          style={{ backgroundColor: getTabColour(status) }}
        >
          {status}
        </p>
      </div>
    </>
  );
};
