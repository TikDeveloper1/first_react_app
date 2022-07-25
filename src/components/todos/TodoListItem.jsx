import { useContext } from "react";
import { TodoContext } from "./TodoCtx";

const TodoListItem = ({ item }) => {
  const { deleteItem } = useContext(TodoContext);

  return (
    <div className="todos-list-item">
      <p className="todos-list-item-title">{item.title}</p>
      <button
        onClick={() => deleteItem(item.id)}
        className="todos-list-item-del"
      >
        del
      </button>
    </div>
  );
};

export default TodoListItem;
