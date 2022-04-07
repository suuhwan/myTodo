import "./TodoList.css";

function TodoListItem({ item, onDelete }) {
  const handleDelete = (id) => {
    onDelete(item.id);
  };
  return (
    <div>
      <div>{item.description}</div>
      <div>
        <button>Done</button>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

function TodoList({ list, onDelete }) {
  return (
    <ul className="TodoList">
      {list.map((item) => {
        return (
          <li className="listItem" key={item.id}>
            <TodoListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
