import { useState, useEffect } from "react";
import './App.css'

// array di film con titolo e genere
const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Film Library</h1>

      <ul>
        {movies.map((film) => (
          <li key={film.title}>
            <strong>{film.title}</strong> – <em>{film.genre}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
