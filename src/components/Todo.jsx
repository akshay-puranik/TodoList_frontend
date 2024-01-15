export const Todo = ({ title, description, dueDate, status }) => {
  return (
    <>
      <div className="task-card">
        <h3>{title}</h3>
        <p><strong>Desc:</strong> {description}</p>
        <p>dueDate: {dueDate}</p>
        <p>status: {status}</p>
      </div>
    </>
  );
};
