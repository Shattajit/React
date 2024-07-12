const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").thunk;

const REQUEST_GET_TODOS = "REQUEST_GET_TODOS";
const REQUEST_FAILED = "REQUEST_FAILED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Action creators
const requestTodos = () => ({
  type: REQUEST_GET_TODOS,
});

const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isLoading: false,
        error: null,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(requestTodos());
    axios
      .get(API_URL)
      .then((response) => {
        const data = response.data;
        const titles = data.map((todo) => todo.title);
        dispatch(requestSuccess(titles));
      })
      .catch((error) => {
        dispatch(requestFailed(error.message));
      });
  };
};

// Store setup
const store = createStore(todosReducer, applyMiddleware(thunk));

// Subscribe to store changes
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch async action
store.dispatch(fetchData());
