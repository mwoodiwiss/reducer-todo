import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.state)
    return (
      <div className="todo-list">
        {props.state.map(item => (
          <Todo key={item.id} {...item} />
        ))}
      </div>
    );
};

export default TodoList;
