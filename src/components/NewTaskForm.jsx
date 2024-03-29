import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/action";
import { v4 as uuidv4 } from "uuid";

export const NewTaskForm = ({ setFormOpen, toggleForm }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ status: "todo" });

  const handleFormData = (e) => {
    const { name, value } = e;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ ...formData, id: uuidv4() }));
    setFormOpen((pre) => !pre);
  };

  return (
    <div className="form-container fadein">
      <form onSubmit={(e) => handleFormSubmit(e)} action="">
        <span className="closeButton" onClick={toggleForm}>
          &#10005;
        </span>
        <h2>Add a new task</h2>
        <input
          onChange={(e) => handleFormData(e.target)}
          type="text"
          required={true}
          name="title"
          id="title"
          placeholder="Enter Task"
        />
        <input
          onChange={(e) => handleFormData(e.target)}
          type="text"
          name="description"
          id="description"
          placeholder="Enter Short Description"
        />
        <input
          onChange={(e) => handleFormData(e.target)}
          type="date"
          required={true}
          name="dueDate"
          id="dueDate"
          placeholder="Enter Due Date"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
