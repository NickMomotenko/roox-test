import React from "react";

const Input = ({ value, placeholder, type = "text", isEdit, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
      readOnly={isEdit ? true : false}
    />
  );
};

export default Input;
