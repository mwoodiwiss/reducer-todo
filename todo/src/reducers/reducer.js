export let initialState = [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
}];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [ ...state, newItem ];
    case 'COMPLETED_ITEM':
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};
