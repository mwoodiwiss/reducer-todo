import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/reducer";
import Todo from "./components/TodoComponents/Todo";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState("");
  const handleChanges = e => {
    setItem(e.target.value);
  };
  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id})
  }

  console.log(state);
  

  return (
    <div>
      <div className="todo-list">
        {state.todos.map(item => (
          <Todo toggleCompleted={toggleCompleted} key={item.id} {...item} />
        ))}
      </div>
      <div>
        <input
          type="text"
          name="item"
          placeholder="...todo"
          value={item}
          onChange={handleChanges}
        />
        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
          Add Item
        </button>
        <button onClick={() => dispatch({ type: "COMPLETED_ITEM"})}>
          Remove Completed Items
        </button>
      </div>
    </div>
  );
}

export default App;
