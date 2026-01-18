const Database = require("better-sqlite3");
const db = new Database("/tmp/grid.db");
db.exec(`
    CREATE TABLE IF NOT EXISTS grid (
      x INTEGER,
      y INTEGER,
      color TEXT
    )
  `);
  const rowCount = db
  .prepare("SELECT COUNT(*) AS count FROM grid")
  .get().count;
  if (rowCount === 0) {
    const pixels = [];
  
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        pixels.push({ x, y, color: "white" });
      }
    }
  
    const insert = db.prepare(
      "INSERT INTO grid (x, y, color) VALUES (?, ?, ?)"
    );
  
    const insertMany = db.transaction((pixels) => {
      for (const pixel of pixels) {
        insert.run(pixel.x, pixel.y, pixel.color);
      }
    });
  
    insertMany(pixels);
  }
  
  module.exports = db;