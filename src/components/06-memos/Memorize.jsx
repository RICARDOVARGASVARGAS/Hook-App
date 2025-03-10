import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effect.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button className="btn btn-primary mr-3" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
