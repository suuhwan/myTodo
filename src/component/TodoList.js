import { useState } from "react";
import TodoFrom from "./TodoFrom";
import "./TodoList.css";

function TodoListItem({ item, onEdit, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  const handleEdit = () => {
    onEdit(item.id);
  };
  return (
    <div>
      <div>{item.description}</div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

function TodoList({ list, onDelete }) {
  const [editingID, setEditingId] = useState(null);
  return (
    <ul className="TodoList">
      {list.map((item) => {
        if (item.id === editingID) {
          return (
            <TodoFrom key={item.id} onEdit={setEditingId} onEditValues={item} />
          );
        }
        return (
          <li className="listItem" key={item.id}>
            <TodoListItem
              item={item}
              onEdit={setEditingId}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
