import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello! world</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => { console.log("I am clicked.") }}></input>
    </React.Fragment>
  );
}

export default App;
