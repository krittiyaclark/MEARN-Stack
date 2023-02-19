import React from "react";

import "./Input.css";

const Input = ({ id, label, type, placeholder, element, rows }) => {
  const elements =
    element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {elements}
    </div>
  );
};

export default Input;
