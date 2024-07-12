import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./Services/Action";

function Counter() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(Increment());
  };

  const handleDecrement = () => {
    dispatch(Decrement());
  };

  const handleReset = () => {
    dispatch(Reset());
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
