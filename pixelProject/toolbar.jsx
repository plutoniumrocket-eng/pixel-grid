import React from "react";
import "./Toolbar.css";

const Toolbar = ({ selectedColor, setSelectedColor }) => {
  const colors = [
    "black",
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
  ];

  return (
    <div className="toolbar">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          className={
            selectedColor === color ? "selected-color" : ""
          }
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
};

export default Toolbar;
