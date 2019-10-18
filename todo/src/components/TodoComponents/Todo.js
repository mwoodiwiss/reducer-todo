import React from "react";

const Todo = props => {
  console.log(props.item);
  return (
    <div>
      <h1 onClick={props.completedItem}>{props.item}</h1>
    </div>
  );
};

export default Todo;
