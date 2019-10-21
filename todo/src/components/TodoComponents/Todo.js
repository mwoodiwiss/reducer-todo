import React from "react";

const Todo = props => {
  console.log(props.item);
  return (
    <div
      onClick={() => props.toggleCompleted(props.id)}
      className={props.id}
      style={props.completed ? { textDecoration: "line-through" } : null}
    >
      <h1>{props.item}</h1>
    </div>
  );
};

export default Todo;
