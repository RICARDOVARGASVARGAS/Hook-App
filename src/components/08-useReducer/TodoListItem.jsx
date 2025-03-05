import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToogle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToogle(todo.id)}
      >
        {index + 1} . {todo.desc}
      </p>
      <button
        type="button"
        onClick={() => handleDelete(todo.id)}
        className="btn btn-danger"
      >
        Borrar
      </button>
    </li>
  );
};
