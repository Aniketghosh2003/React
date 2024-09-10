import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foods = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  if (foods.length == 0) {
    <h3>hello</h3>;
  }
  return (
    <>
      <h1>Fragments</h1>
      <ul className="list-group">
        {foods.map((item1) => {
          <li key={item1} className="list-group-item">
            {item1}
          </li>;
        })}
      </ul>
    </>
  );
}

export default App;
