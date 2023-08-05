import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");

  const handleClick = (e) => {
    if (e.target.innerText === "RESET") {
      setScreen("");
    } else {
      screen.length < 10
        ? setScreen((prevState) => prevState + e.target.innerText)
        : "";
    }
  };

  const handleOperatorsClick = (e) => {
    console.log("You clicked me " + e.target.innerText);
  };

  return (
    <main className="container-calc">
      <h1>calc</h1>
      <section className="screen-section">{!screen ? "0" : screen}</section>
      <section className="keys-section">
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          7
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          8
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          9
        </div>
        <div className="secondary-key" onClick={(e) => handleOperatorsClick(e)}>
          DEL
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          4
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          5
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          6
        </div>
        <div className="primary-key" onClick={(e) => handleOperatorsClick(e)}>
          +
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          1
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          2
        </div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          3
        </div>
        <div className="primary-key" onClick={(e) => handleOperatorsClick(e)}>
          -
        </div>
        <div className="primary-key">.</div>
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          0
        </div>
        <div className="primary-key" onClick={(e) => handleOperatorsClick(e)}>
          /
        </div>
        <div className="primary-key" onClick={(e) => handleOperatorsClick(e)}>
          *
        </div>
        <div className="secondary-key reset" onClick={(e) => handleClick(e)}>
          RESET
        </div>
        <div className="equal-key" onClick={(e) => handleOperatorsClick(e)}>
          =
        </div>
      </section>
    </main>
  );
}

export default App;
