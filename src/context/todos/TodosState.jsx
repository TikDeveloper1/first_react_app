import React, { useReducer } from "react";
import { createContext } from "react";
import { initialState, TodosReducer } from "./TodosReducer";

export const TodosContext = createContext({});

const TodosState = ({ children }) => {
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <TodosContext.Provider value={{ todosStore: state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
