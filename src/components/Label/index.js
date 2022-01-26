import React from "react";

import Input from "../Input/Input";

import "./Label.scss";

const Label = ({ label, hookValue, isEdit, placeholder }) => {
  return (
    <label className="label">
      <div className="label__title">{label}</div>
      <Input
        value={hookValue.value}
        placeholder={placeholder}
        onChange={hookValue.onChange}
        isEdit={isEdit ? false : true}
      />
    </label>
  );
};

export default Label;
