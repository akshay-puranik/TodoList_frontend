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
    setDisplayTodos({...toDos})
  },[toDos])
  
  const [isFormOpen, setFormOpen] = useState(false);

  const handleFilters = ({ selectStatus, searchName }) => {
    // let newList = {};

    // if (selectStatus && selectStatus !== "all") {
    //   newList[selectStatus] = toDos[selectStatus];
    // }
    // if (searchName) {
    //   for (let i in toDos) {
    //     newList[i] = toDos[i].filter((task) =>
    //       task.title.toLowerCase().includes(searchName)
    //     );
    //   }
    // }

    // setDisplayTodos((pre) => newList);
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
