import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").focus();
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Screen</h1>

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
