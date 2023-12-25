import React from "react";
import { useAppContext } from "../../servicos/context";
const ErrorMessageBox = () => {
  const { error } = useAppContext();
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessageBox;
