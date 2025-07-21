
import { useState, useEffect } from "react";


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
    <div className="container py-4">

      <h1 className="mb-4">Film Library</h1>

      <div className="mb-3">
        <label className="pb-2">Filtra per genere:</label>
        <select className="form-select"
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

      <ul className="list-group card p-3 list-unstyled">
        {filteredMovies.map((film) => (
          <li key={film.title}>
            <strong>{film.title}</strong> – <em>{film.genre}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
