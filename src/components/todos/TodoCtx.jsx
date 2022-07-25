import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoCtx = ({ children }) => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const onAddItem = (title) => {
    setItems((prev) => {
      return [
        ...prev,
        {
          title: title,
          id: prev.length + 1,
        },
      ];
    });
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <TodoContext.Provider value={{ items, onAddItem, deleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoCtx;
