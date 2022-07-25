import React, { useState, useRef, useContext } from "react";
import { TodoContext } from "./TodoCtx";

const TodosHead = () => {
  const { onAddItem } = useContext(TodoContext);
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleBtn = () => {
    if (!val.trim()) {
      inputRef.current.style.border = "solid red";
      setError("Please, write todo name");
      return;
    }
    onAddItem(val);
    setVal("");
    setError("");
    inputRef.current.style.border = "none";
  };

  const handleBtnWithKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleBtn();
    }
  };

  return (
    <div className="todos-head">
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
};

export default TodosHead;
