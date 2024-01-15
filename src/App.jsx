import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { NewTaskForm } from "./components/NewTaskForm";

function App() {
  const toDos = useSelector((store) => store.todos);
  const [displayTodos, setDisplayTodos] = useState([...toDos]);
  const [isFormOpen, setFormOpen] = useState(false);

  const handleFilters = ({ selectOrder, selectStatus, searchName }) => {
    let newList = [...toDos];
    if (searchName) {
      newList = newList.filter((task) =>
        task.title.toLowerCase().includes(searchName)
      );
    }
    if (selectStatus && selectStatus !== "all") {
      newList = newList.filter((task) => task.status === selectStatus);
    }
    if (selectOrder && selectOrder === "asc") {
      newList.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    } else {
      newList.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    }

    setDisplayTodos((pre) => [...newList]);
  };

  return (
    <>
      <Navbar setFormOpen={setFormOpen} handleFilters={handleFilters} />
      {isFormOpen && <NewTaskForm setFormOpen={setFormOpen} />}
      <TodoList tasks={displayTodos} />
    </>
  );
}

export default App;
