import "./App.css";
import List from "./list";

function App() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 105 },
    { name: "banana", calories: 120 },
    { name: "coconut", calories: 75 },
    { name: "pineapple", calories: 50 },
  ];
  return (
    <>
      <List items={fruits} catagories="Fruits"/>
    </>
  );
}

export default App;
