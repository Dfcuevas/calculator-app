import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(0);

  const handleClick = (e) => {
    setScreen(parseInt(e.target.innerText));
  };

  console.log(screen);
  return (
    <main className="container-calc">
      <h1>calc</h1>
      <section className="screen-section">{screen}</section>
      <section className="keys-section">
        <div className="primary-key" onClick={(e) => handleClick(e)}>
          7
        </div>
        <div className="primary-key">8</div>
        <div className="primary-key">9</div>
        <div className="secondary-key">DEL</div>
        <div className="primary-key">4</div>
        <div className="primary-key">5</div>
        <div className="primary-key">6</div>
        <div className="primary-key">+</div>
        <div className="primary-key">1</div>
        <div className="primary-key">2</div>
        <div className="primary-key">3</div>
        <div className="primary-key">-</div>
        <div className="primary-key">.</div>
        <div className="primary-key">0</div>
        <div className="primary-key">/</div>
        <div className="primary-key">x</div>
        <div className="secondary-key reset">RESET</div>
        <div className="equal-key">=</div>
      </section>
    </main>
  );
}

export default App;
