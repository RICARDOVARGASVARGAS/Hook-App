import React, { useCallback, useState } from "react";
import { Hijo } from "./Hijo";
import "../02-useEffect/effect.css";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(10);

  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };

  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );
  return (
    <div>
      <h1>Padre</h1>
      <p>Total: {valor}</p>
      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
