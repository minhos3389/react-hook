import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const ref = useRef<number | null>(null);

  const handleStartClick = () => {
    setStart(Date.now());
    setNow(Date.now());

    if (ref.current) {
      window.clearInterval(ref.current);
    }
    ref.current = window.setInterval(() => {
      setNow(Date.now());
    }, 100); // 0.1seconds
  };

  const handleEndClick = () => {
    if (ref.current) {
      window.clearInterval(ref.current);
    }
  };

  return (
    <div>
      <p>Elapsed time: {(now - start) / 1000}</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleEndClick}>End</button>
    </div>
  );
}

export default App;
