import React, { useEffect, useState } from "react";
import Movie from "./component/Movie";
import axios from "axios";
import Loading from "./component/Loading";

const url = "https://60a004427ee1430017bf1440.mockapi.io/movies";
const Featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Sewrch_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [moives, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(Featured_api);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setLoading(false);
      });
  };

  const haldleOnsubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(Sewrch_api + searchTerm);
      setSearchTerm("");
    }
  };

  const handleonChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <header>
        <form onSubmit={haldleOnsubmit}>
          <input
            className="search"
            type="search"
            placeholder="search..."
            value={searchTerm}
            onChange={handleonChange}
          />
        </form>
      </header>
      <main className="movie-container">
        {moives.length &&
          moives.map((movie) => <Movie key={movie.id} {...movie} />)}
      </main>
    </>
  );
}

export default App;
