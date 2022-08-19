import React, { useContext } from "react";
import { TodosContext } from "../../context/todos/TodosState";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todosStore } = useContext(TodosContext);

  return (
    <div className="todos-list">
      {todosStore.todos.map((item, idx) => {
        return <TodoListItem key={idx} item={item} idx={idx} />;
      })}
    </div>
  );
};

export default TodoList;
