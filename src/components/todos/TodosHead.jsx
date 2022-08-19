import React, { useState, useRef, useContext } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
import { addTodo } from "../../context/todos/TodosActionCreators";
import { TodosContext } from "../../context/todos/TodosState";

const TodosHead = forwardRef((props, ref) => {
  const { dispatch } = useContext(TodosContext);
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleBtn = () => {
    if (!val.trim()) {
      inputRef.current.style.border = "solid red";
      setError("Please, write todo name");
      return;
    }
    dispatch(addTodo(val));
    setVal("");
    setError("");
    inputRef.current.style.border = "none";
  };

  const handleBtnWithKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleBtn();
    }
  };

  useEffect(() => {
    console.log("asdasd");
    if (ref.current) console.log(ref.current);
  }, [ref]);

  return (
    <div className="todos-head" ref={ref}>
      <input
        ref={inputRef}
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyUp={handleBtnWithKeyUp}
      />
      {error && <p>{error}</p>}
      <button onClick={handleBtn}>Add</button>
    </div>
  );
});

export default TodosHead;
