import { createStore } from "redux";
import counterReducer from "./Reducers";

export const store = createStore(counterReducer);
