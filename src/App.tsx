import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

const initialItems = [
  { item: 0, text: "soccer" },
  { item: 1, text: "baseball" },
  { item: 2, text: "swimming" },
  { item: 3, text: "volleyball" },
  { item: 4, text: "dodgeball" },
];

function App() {
  const [text, setText] = useState("");
  const [sports, setSports] = useState(initialItems);

  useEffect(() => {
    console.log("sports:", sports);
  }, [sports]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = (item: number) => {
    if (text === "") return;
    const idx = sports.findIndex((data) => data.item === item);
    const list = [
      // slice don't include second parameter idx its until before idx.
      ...sports.slice(0, idx + 1),
      { item: sports.length, text: text },
      ...sports.slice(idx + 1),
    ];
    setSports(list);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />

      <ul>
        {sports.map((data) => (
          <li key={data.item}>
            {data.text}
            <button onClick={() => handleClick(data.item)}>추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
