import { useRef, useState } from "react";
import "./App.css";

function App() {
  const ref = useRef<number>(0);
  console.log("rendering", ref);
  const [count, setCount] = useState(0);

  const handleRefClick = () => {
    ref.current = ref.current + 1;
    console.log("ref.current: ", ref.current);
  };
  const handleStateClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleRefClick}>useRef: {ref.current}</button>
      <button onClick={handleStateClick}>
        useState: {`${count}, ${ref.current}`}
      </button>
    </div>
  );
}

export default App;
