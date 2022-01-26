import React from "react";

import classNames from "classnames";

import "./Button.scss";

const Button = ({ text, viewType, transparent,  onClick }) => {
  return (
    <button
      className={classNames("button", {
        "button--small": viewType === "small",
        "button--transparent": transparent,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
