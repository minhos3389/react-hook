import { useEffect, useState } from "react";
import "./App.css";

const initialItems = [
  { item: 0, text: "soccer" },
  { item: 1, text: "baseball" },
  { item: 2, text: "swimming" },
  { item: 3, text: "volleyball" },
  { item: 4, text: "dodgeball" },
];

function App() {
  const [sports, setSports] = useState(initialItems);

  useEffect(() => {
    console.log("sports:", sports);
  }, [sports]);

  const handleChange = (item: number, text: string) => {
    const update = sports.map((data) => {
      if (data.item === item) {
        return { ...data, text };
      }
      return data;
    });
    setSports(update);
  };

  return (
    <ul>
      {sports.map((data) => (
        <li key={data.item}>
          <input
            value={data.text}
            onChange={(e) => handleChange(data.item, e.target.value)}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
