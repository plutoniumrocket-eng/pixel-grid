const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/grid", (req, res) => {
    try {
      const grid = db.prepare("SELECT * FROM grid").all();
      res.status(200).json({ grid });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch grid" });
    }
  });

  app.post("/setGridColor", (req, res) => {
    try {
      const { x, y, color } = req.body;
  
      if (!color) {
        return res.status(400).json({ message: "Color is required" });
      }
  
      const cell = db
        .prepare("SELECT * FROM grid WHERE x = ? AND y = ?")
        .get(x, y);
  
      if (!cell) {
        return res
          .status(400)
          .json({ message: "Invalid grid coordinates" });
      }
  
      db.prepare(
        "UPDATE grid SET color = ? WHERE x = ? AND y = ?"
      ).run(color, x, y);
  
      const grid = db.prepare("SELECT * FROM grid").all();
  
      res.status(200).json({
        message: "Pixel color updated",
        grid,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update pixel" });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  