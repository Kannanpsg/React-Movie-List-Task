import { Movie } from "./Movie";
import {useEffect, useState} from "react";



export function MovieList() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch("https://6166c4df13aa1d00170a6708.mockapi.io/movies")
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));
    }, []);

    

  
  
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }) => (
        <Movie name={name} rating={rating} summary={summary} poster={poster} />
      ))}
    </section>
  );
}
