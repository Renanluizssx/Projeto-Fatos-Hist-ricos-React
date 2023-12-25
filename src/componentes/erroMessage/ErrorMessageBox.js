import React from "react";
import { useAppContext } from "../../servicos/Context";
const ErrorMessageBox = () => {
  const { error } = useAppContext();
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessageBox;
