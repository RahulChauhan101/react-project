import React, { useState, useEffect } from "react";
import "./MovieApp.css";
const movieData = [
  {
    id: 1,
    title: "Inception",
    vote_average: 8.8,
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    vote_average: 8.6,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    vote_average: 8.4,
    poster_path: "/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    vote_average: 8.9,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 6,
    title: "Fight Club",
    vote_average: 8.8,
    poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
  },
  {
    id: 7,
    title: "Forrest Gump",
    vote_average: 8.8,
    poster_path: "/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
  },
  {
    id: 8,
    title: "The Matrix",
    vote_average: 8.7,
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    vote_average: 9.3,
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 10,
    title: "Gladiator",
    vote_average: 8.5,
    poster_path: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
];


function MovieApp() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setMovies(movieData);
    }, 1000);
  }, []);

  return (
    <div className="movie-app">
      <h1>Popular Movies (Mock Data)</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieApp;



// import React, { useEffect, useState } from "react";
// import "./MovieApp.css";

// const API_KEY = "your_real_tmdb_api_key_here";
// const BASE_URL = "https://api.themoviedb.org/3";

// function MovieApp() {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         setMovies(data.results || []);
//         setError(null);
//       })
//       .catch((err) => {
//         console.error("Error fetching movies:", err);
//         setError("Failed to load movies.");
//       });
//   }, []);

//   return (
//     <div className="movie-app">
//       <h1>Popular Movies</h1>
//       {error && <p className="error">{error}</p>}
//       <div className="movie-grid">
//         {Array.isArray(movies) && movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img
//               src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <h3>{movie.title}</h3>
//             <p>Rating: {movie.vote_average}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MovieApp;
