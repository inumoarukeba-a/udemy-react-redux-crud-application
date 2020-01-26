import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <h1>Hello! world</h1>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => { console.log("I am clicked.") }}></input>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
