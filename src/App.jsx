import { useState } from "react";
import { verses } from "./verses";
import "./styles.css";

export default function App() {
  const [category, setCategory] = useState("");
  const [verse, setVerse] = useState("");

  const getDailyVerse = () => {
    if (!category) return;

    const today = new Date().getDay(); // 0–6
    const selected = verses[category][today];
    setVerse(selected);
  };

  return (
    <div className="app-container">
      <h1 className="title">Daily Bible Verse</h1>
      <p className="subtitle">King James Version • 1 Week Rotation</p>

      <div className="selector-box">
        <label>Select a category:</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose...</option>
          <option value="marriage">Marriage</option>
          <option value="kids">Kids</option>
          <option value="relationship">Relationship</option>
          <option value="self">Self</option>
        </select>

        <button onClick={getDailyVerse}>Show Verse</button>
      </div>

      {verse && (
        <div className="verse-box glass">
          <p>{verse}</p>
        </div>
      )}
    </div>
  );
}
