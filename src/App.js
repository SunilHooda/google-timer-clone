import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Stopwatch from "./Components/StopWatch/Stopwatch";

function App() {
  const [active, setActive] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <div className="timerContainer">
        <Header active={active} setActive={setActive} />
        <div style={{ margin: "auto", padding: "10px 0" }}>
          <Stopwatch active={active} />
        </div>
      </div>
    </div>
  );
}

export default App;
