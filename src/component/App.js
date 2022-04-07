import { useEffect, useState } from "react";
import { getTodo, deleteTodo } from "../api";
import TodoList from "./TodoList";
import TodoFrom from "./TodoFrom";

function App() {
  const [list, setList] = useState([]);

  const handleload = async () => {
    const res = await getTodo();
    setList(res.data);
  };

  const handleDelete = async (id) => {
    deleteTodo(id);
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    handleload();
  }, []);

  return (
    <div className="App">
      <TodoFrom />
      <TodoList list={list} onDelete={handleDelete} />
    </div>
  );
}

export default App;
