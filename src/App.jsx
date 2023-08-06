import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");

  return (
    <main className="container-calc">
      <h1>calc</h1>
      <section className="screen-section">{!screen ? "0" : screen}</section>
      <section className="keys-section">
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          7
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          8
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          9
        </div>
        <div
          className="secondary-key"
          onClick={(e) => setScreen(screen.slice(0, -1))}
        >
          DEL
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          4
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          5
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          6
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          +
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          1
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          2
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          3
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          -
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          .
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          0
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          /
        </div>
        <div
          className="primary-key"
          onClick={(e) => setScreen(screen + e.target.innerText)}
        >
          *
        </div>
        <div className="secondary-key reset" onClick={(e) => setScreen("")}>
          RESET
        </div>
        <div className="equal-key" onClick={(e) => setScreen(eval(screen))}>
          =
        </div>
      </section>
    </main>
  );
}

export default App;
