# 🎨 Pixel Grid Project

A full-stack pixel grid application that allows users to paint individual pixels on a 20x20 digital canvas. The project demonstrates front-end and back-end integration, RESTful APIs, database updates, and state management in React.

---

## 🚀 Features

- 20x20 interactive pixel grid
- Click-to-paint pixels with selectable colors
- Toolbar with multiple color options
- Real-time updates reflected across the grid
- Fully connected front-end and back-end
- Input validation and error handling on the server

---

## 🛠️ Tech Stack

### Front-End
- React
- JavaScript (ES6+)
- CSS Grid & Flexbox
- Fetch API

### Back-End
- Node.js
- Express
- SQLite
- CORS middleware

---

## 📂 Project Structure


---

## ⚙️ How It Works

1. The back-end initializes a 20x20 grid in the database with default white pixels.
2. The front-end fetches the grid data on load.
3. Users select a color from the toolbar.
4. Clicking a pixel sends a POST request with coordinates and color.
5. The server validates input, updates the database, and returns the updated grid.
6. The UI re-renders with the new pixel color.

---

## 🧪 API Endpoints

### `GET /grid`
Returns the full grid from the database.

### `POST /setGridColor`
Updates a pixel's color.

**Request Body:**
```json
{
  "x": 5,
  "y": 10,
  "color": "red"
}

