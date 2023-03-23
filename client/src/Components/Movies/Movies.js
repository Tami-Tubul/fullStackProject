import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import MovieComp from "./Movie";


const MoviesComp = () => {

  const [valSearch, setValSearch] = useState()

  const storeMovies = useSelector(state => state.moviesReducer)
  const dispatch = useDispatch()
  const { state } = useLocation();

  console.log(state?.previousPath);

  const searchInputRef = useRef()

  const searchMovie = () => {

    let valsearch = searchInputRef.current.value;
    setValSearch(valsearch) // save on state for check if field was fill or not

    if (valsearch) {
      let allMovies = storeMovies.movies;
      let filterMovies = allMovies.filter(movie => {
        return (movie.name.toLowerCase().indexOf(valsearch.toLowerCase()) != -1) ||
          (movie.genres.find(g => g.toLowerCase().indexOf(valsearch.toLowerCase()) != -1)) ||
          (new Date(movie.premiered).getFullYear().toString().indexOf(valsearch) != -1)
      })

      dispatch({ type: "FILTERED_MOVIES", payload: filterMovies })
    }
  }


  return (<>

    <div className="moviesFiltering">

      <input type="search" placeholder="Find Movie" ref={searchInputRef} />
      <ButtonComp width="10%" onClick={searchMovie}>Find</ButtonComp>

    </div>

    {valSearch && <span style={{ color: "red" }}>{storeMovies.filteredMovies.length} results found</span>}

    <div className="scroll-div">

      <br />

      <div className="grid">
        {

          valSearch ?
            storeMovies.filteredMovies.map(movie => {
              return <MovieComp movieData={movie} key={movie._id} />
            })
            :
            !valSearch && state?.previousPath == "/subscriptions/members" ?
              <MovieComp movieData={storeMovies.subscibeMovie} />
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