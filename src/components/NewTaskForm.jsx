import { useState } from "react";

export const NewTaskForm = ({ setFormOpen }) => {
  const [formData, setFormData] = useState({});

  const handleFormData = (e) => {
    const { name, value } = e;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
          name="desc"
          id="desc"
          placeholder="Enter Short Description"
        />
        <input
          onChange={(e) => handleFormData(e.target)}
          type="text"
          required={true}
          name="date"
          id="date"
          placeholder="Enter Due Date"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
