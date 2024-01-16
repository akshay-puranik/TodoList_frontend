import { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { NewTaskForm } from "./components/NewTaskForm";

function App() {
  const toDos = useSelector((store) => store.todos);
  const [displayTodos, setDisplayTodos] = useState({ ...toDos });
  useEffect(() => {
    setDisplayTodos({ ...toDos });
  }, [JSON.stringify(toDos)]);

  const [isFormOpen, setFormOpen] = useState(false);
  const toggleForm = () => {
    setFormOpen((pre) => !pre);
  };

  const handleFilters = ({ selectStatus, searchName }) => {
    let newList = { ...toDos };
    if (selectStatus && selectStatus !== "all") {
      newList = {};
      newList[selectStatus] = toDos[selectStatus];
    }
    if (searchName) {
      for (let i in toDos) {
        newList[i] = toDos[i].filter((task) =>
          task.title.toLowerCase().includes(searchName)
        );
      }
    }
    setDisplayTodos((pre) => newList);
  };

  return (
    <>
      <Navbar toggleForm={toggleForm} handleFilters={handleFilters} />
      {isFormOpen && (
        <NewTaskForm toggleForm={toggleForm} setFormOpen={setFormOpen} />
      )}
      <div className="bodyContainer">
        <TodoList tasks={displayTodos} />
      </div>
    </>
  );
}

export default App;
