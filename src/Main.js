import React from "react";
import App from "./App";
import { AppProvider } from "./servicos/context";

function Main() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default Main;
