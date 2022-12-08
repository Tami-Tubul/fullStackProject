import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ButtonComp from "../../UI/Button";
import MovieComp from "./Movie";


const MoviesComp = () => {

  const storeMovies = useSelector(state => state.moviesReducer)

  const [filteredMovies, setFilteredMovies] = useState()
  const searchInputRef = useRef()

  const seachMovie = () => {
    let valSearch = searchInputRef.current.value;
    let allMovies = storeMovies.movies;
    let filterMovies = allMovies.filter(movie => {
      return (movie.name.toLowerCase().indexOf(valSearch.toLowerCase()) != -1) ||
        (movie.genres.find(g => g.toLowerCase().indexOf(valSearch.toLowerCase()) != -1)) ||
        (new Date(movie.premiered).getFullYear().toString().indexOf(valSearch) != -1)
    })

    setFilteredMovies(filterMovies);
  }


  return (<>

    <div className="moviesFiltering">

      {/* <FormControlComp label="Find Movie" type="search" ref={searchInputRef} /> */}

      <input type="search" placeholder="Find Movie" ref={searchInputRef} />
      <ButtonComp width="10%" onClick={seachMovie}>Find</ButtonComp>

    </div>

   { filteredMovies && <span style={{ color: "red" }}>{filteredMovies.length} results found</span> }

    <div className="scroll-div">
     
      <br />
     
      <div className="grid">
        {
          filteredMovies ?
            filteredMovies.map(movie => {
              return <MovieComp movieData={movie} key={movie._id} />
            })
            :
            storeMovies.movies.map(movie => {
              return <MovieComp movieData={movie} key={movie._id} />
            })
        }

      </div>

    </div>

  </>)
}

export default MoviesComp;