import React from "react";
import App from "./App";
import { AppProvider } from "./servicos/Context";

function Main() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default Main;
