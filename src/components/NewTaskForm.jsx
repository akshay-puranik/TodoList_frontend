import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/action";

export const NewTaskForm = ({ setFormOpen }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ status: "todo" });

  const handleFormData = (e) => {
    const { name, value } = e;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(formData));
    setFormOpen((pre) => !pre);
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleFormSubmit(e)} action="">
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
