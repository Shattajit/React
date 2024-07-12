const { createStore } = require("redux");

const increment = "increment";
const decrement = "decrement";
const reset = "reset";
const add_user = "add_user";

const initialState = {
  count: 0,
  users: "",
};

// actions

const incrementCounter = () => {
  return {
    type: increment,
  };
};

const decrementCounter = () => {
  return {
    type: decrement,
  };
};

const resetCounter = () => {
  return {
    type: reset,
  };
};

const addUser = (user) => {
  return {
    type: add_user,
    payload: user,
  };
};

// reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };
    case add_user:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("shatta"));
store.dispatch(addUser("ghosh"));
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
