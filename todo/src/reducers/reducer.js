export let initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { todos: [...state.todos, newItem] };

    case "COMPLETED_ITEM":
      return { todos: state.todos.filter(item => !item.completed) };

    case "TOGGLE_COMPLETED":
        return {
          ...state,
          todos: state.todos.map(todo => {
              if (todo.id === action.payload)
              return {...todo, 
                      completed: !todo.completed 
                  }
              else {
                  return todo;
              }
          })
      }

    default:
      return state;
  }
};
