import { useContext } from "react";
import { removeTodo } from "../../context/todos/TodosActionCreators";
import { TodosContext } from "../../context/todos/TodosState";

const TodoListItem = ({ item, idx }) => {
  const { dispatch } = useContext(TodosContext);

  return (
    <div className="todos-list-item">
      <p className="todos-list-item-title">{item.title}</p>
      <button
        onClick={() => dispatch(removeTodo(idx))}
        className="todos-list-item-del"
      >
        del
      </button>
    </div>
  );
};

export default TodoListItem;
