import "./App.css";
import UserGreeting from "./userGreeting";

function App() {
  return (
    <>
      <UserGreeting userLogged={false} username="Aniket"></UserGreeting>
    </>
  );
}

export default App;
