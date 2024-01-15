import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const toDos = useSelector(store => store.todos)
  const [displayTodos, setDisplayTodos] = useState([...toDos]);

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
    // if (selectOrder && selectOrder === "asc") {
    //   newList.sort((a, b) => a.title - b.title);
    // }
    // else{
    //   newList.sort((a, b) => b.title - a.title);
    // }

    setDisplayTodos(pre => [...newList]);
  };

  return (
    <>
      <Navbar handleFilters={handleFilters} />
      <TodoList tasks={displayTodos} />
    </>
  );
}

export default App;
