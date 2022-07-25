import React, { useContext } from "react";
import { TodoContext } from "./TodoCtx";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { items } = useContext(TodoContext);

  return (
    <div className="todos-list">
      {items.map((item) => {
        return <TodoListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
