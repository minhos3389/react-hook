import { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  // dont render every moments when put text to input element
  const handleClick = () => {
    if (ref.current) {
      setValue(ref.current.value);
      ref.current.focus();
    }
  };

  return (
    <div>
      <input id="one" ref={ref} />
      <button onClick={handleClick}>show value</button>
      <p>value: {value}</p>
    </div>
  );
}

export default App;
