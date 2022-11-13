import { useSelector } from "react-redux";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import MovieComp from "./Movie";


const MoviesComp = () => {


  const storeMovies = useSelector(state => state.moviesReducer)


  return (<>

    <div className="moviesFiltering">
      <FormControlComp label="Find Movie" type="search" /><ButtonComp width="10%">Find</ButtonComp>
    </div>
 
    <div className="scroll-div">

      <div className="grid">
        {
          storeMovies.movies.map(movie => {
            return <MovieComp key={movie._id} movieData={movie} />
          })
        }
      </div>

    </div>

  </>)
}

export default MoviesComp;