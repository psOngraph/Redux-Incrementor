import React from "react";
import { Counter } from "./Component/Counter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Counter />
    </div>
  );
}

export default App;
