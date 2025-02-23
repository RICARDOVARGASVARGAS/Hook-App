import React, { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("componente desmontado");
    };
  });
  return (
    <div>
      <h3>Coordenadas</h3>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  );
};
