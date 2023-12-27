import React from "react";
const ErrorMessageBox = ({ error }) => {
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessageBox;
