import React from "react";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with Hook: {state}</h1>

      <hr />

      <button onClick={() => increment(3)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-danger">
        R
      </button>
      <button onClick={() => decrement(3)} className="btn btn-secondary">
        -1
      </button>
    </>
  );
};
