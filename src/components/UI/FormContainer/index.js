import React from "react";

const FormContainer = ({ onSumbit, children }) => {
  return <form onSubmit={onSumbit}>{children}</form>;
};

export default FormContainer;
