import { useCallback, useEffect, useState } from "react";
import { getTodo, deleteTodo } from "../api";
import TodoList from "./TodoList";
import TodoFrom from "./TodoFrom";

function App() {
  const [list, setList] = useState([]);

  const handleload = useCallback(async () => {
    const res = await getTodo();
    setList(res.data);
  }, [list]);

  const handleDelete = async (id) => {
    deleteTodo(id);
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmitSuccess = (newTodo) => {
    setList((prev) => [newTodo, ...prev]);
  };

  useEffect(() => {
    handleload();
  }, []);

  return (
    <div className="App">
      <TodoFrom onSubmitSuccess={handleSubmitSuccess} />
      <TodoList list={list} onDelete={handleDelete} />
    </div>
  );
}

export default App;
