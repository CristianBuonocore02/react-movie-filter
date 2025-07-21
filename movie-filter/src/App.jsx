// 🔽 Importiamo React (ci servono useState e useEffect)
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// 🎞️ Lista iniziale dei film, ciascuno con un titolo e un genere
const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);


  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((m) => m.genre === selectedGenre));
    }
  }, [selectedGenre]);

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>

      <h1>Film Library</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Filtra per genere:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>

      <ul>
        {filteredMovies.map((film) => (
          <li key={film.title}>
            <strong>{film.title}</strong> – <em>{film.genre}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
