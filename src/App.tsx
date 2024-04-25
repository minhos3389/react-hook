import { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
      console.log("id", ref.current.id); // id one
    }
  };

  return (
    <div>
      <input id="one" ref={ref} />
      <button onClick={handleClick}>focus</button>
    </div>
  );
}

export default App;
