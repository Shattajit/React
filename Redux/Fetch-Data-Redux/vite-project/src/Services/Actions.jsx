import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./Constants";

export const request = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const success = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

export const errors = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error.message,
  };
};
