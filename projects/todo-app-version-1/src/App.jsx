import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Additem1 from "./components/Additem1";
import Additem2 from "./components/Additem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Additem1></Additem1>
      <Additem2></Additem2>
    </center>
  );
}

export default App;
