import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <p>Press button to toggle language.</p>
    </div>
  );
}

export default App;
