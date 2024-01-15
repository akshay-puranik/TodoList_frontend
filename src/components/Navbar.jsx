import { useEffect, useState } from "react";

export const Navbar = ({ handleFilters, setFormOpen }) => {
  const [filterOptions, setFilterOptions] = useState({});

  useEffect(() => {
    handleFilters(filterOptions);
  }, [filterOptions]);

  const handleInputs = (e) => {
    const { name, value } = e;
    setFilterOptions((pre) => ({ ...pre, [name]: value }));
  };

  const selectOptions = ["all", "todo", "pending", "completed"];

  return (
    <div className="navbar-container">
      {/* <select name="selectOrder" onChange={(e) => handleInputs(e.target)}>
        <option defaultValue="asc" value={"asc"}>
          Ascending
        </option>
        <option value={"desc"}>Decending</option>
      </select> */}
      <select
        defaultValue="all"
        name="selectStatus"
        onChange={(e) => handleInputs(e.target)}
      >
        {selectOptions.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      <input
        className="search"
        name="searchName"
        defaultValue=""
        type="text"
        onChange={(e) => handleInputs(e.target)}
        placeholder="Search Task"
      />
      <button onClick={() => setFormOpen((pre) => !pre)}>Add New Task</button>
    </div>
  );
};
