import React, { useEffect, useState } from "react";
import "./App.css";
import PixelGrid from "./PixelGrid";
import Toolbar from "./Toolbar";

const URL = "http://localhost:3001";

const App = () => {
  const [grid, setGrid] = useState([]);
  const [selectedColor, setSelectedColor] = useState("black");

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) =>
        console.error("Error fetching grid:", error)
      );
  }, []);

  const updateColor = async (x, y) => {
    try {
      const response = await fetch(`${URL}/setGridColor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          x,
          y,
          color: selectedColor,
        }),
      });

      const data = await response.json();
      setGrid(data.grid);
    } catch (error) {
      console.error("Error updating pixel:", error);
    }
  };

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>

      <PixelGrid
        grid={grid}
        updateColor={updateColor}
      />

      <Toolbar
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};

export default App;