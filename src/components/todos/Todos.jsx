import React from "react";
import TodoCtx from "./TodoCtx";
import TodoList from "./TodoList";
import TodosHead from "./TodosHead";

const Todos = () => {
  return (
    <TodoCtx>
      <div className="todos">
        <TodosHead />
        <TodoList />
      </div>
    </TodoCtx>
  );
};

export default Todos;
