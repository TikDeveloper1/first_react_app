import { useRef } from "react";
import TodoList from "./TodoList";
import TodosHead from "./TodosHead";

const Todos = () => {
  const todoHeadRef = useRef(null);

  return (
    <div className="todos">
      <TodosHead ref={todoHeadRef} />
      <TodoList />
    </div>
  );
};

export default Todos;
