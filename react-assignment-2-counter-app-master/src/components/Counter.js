import React, { useState } from 'react';

export default function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {

    setCount((prevCount) => {
      return prevCount + 1;
    })
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    })
  };

  const reset = () => {
    setCount((prevCount) => {
      return prevCount = 0;
    })
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increment} disabled={count >= 5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={decrement} disabled={count <= -5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={reset}>0</button>
        </div>
      </div>
    </div>
  )
}
