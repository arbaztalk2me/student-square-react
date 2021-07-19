import React from "react";

function Input(props) {
  const {
    type = "text",
    placeholder = "enter text",
    name,
    value,
    onChange,
  } = props;
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
