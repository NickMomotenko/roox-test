import React from "react";

export const useInput = () => {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return { value, onChange };
};
