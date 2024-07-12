import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

function CounterView() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>
        IncreaseByAmount
      </button>
    </div>
  );
}

export default CounterView;
