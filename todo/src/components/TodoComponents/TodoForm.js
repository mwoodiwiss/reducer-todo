import React, { useState } from "react";

const TodoForm = props => {
  const [item, setItem] = useState("");
  const handleChanges = e => {
    setItem(e.target.value);
  };
  console.log(props.addItem, props.state)

  return (
    <div>
      <input
        type="text"
        name="item"
        placeholder="...todo"
        value={item}
        onChange={handleChanges}
      />
      <button onClick={props.addItem}>Add Item</button>
    </div>
  );
};

export default TodoForm;
