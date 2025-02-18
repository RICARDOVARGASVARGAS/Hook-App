import React from "react";
import "../02-useEffect/effect.css";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const state = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`);
  console.log(state);

  return <div>MultipleCustomHooks</div>;
};
