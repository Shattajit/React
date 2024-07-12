import { API_URL } from "./Constants";
import axios from "axios";
import { errors, request, success } from "./Actions";

export const getAllTodos = () => async (dispatch) => {
  try {
    dispatch(request());
    const res = await axios.get(API_URL);
    dispatch(success(res.data));
  } catch (error) {
    dispatch(errors(error.message));
  }
};
