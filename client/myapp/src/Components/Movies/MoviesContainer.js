import { NavLink, Outlet } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import CardComp from "../../UI/Card";
import FormControlComp from "../../UI/FormControl";

const MoviesContainerComp = () => {


  return (<CardComp width="60%">
    <h2>Movies</h2>
    <hr></hr>
   
    <div className="moviesFiltering">
    
      <nav>
        <ul>
          <li><NavLink to="allMovies" className={navData => navData.isActive ? "active" : ''}>All Movies</NavLink></li>
          <li><NavLink to="addMovie" className={navData => navData.isActive ? "active" : ''}>Add Movie</NavLink></li>
        </ul>

      </nav>

      <FormControlComp label="Find Movie" type="search" /><ButtonComp width="10%">Find</ButtonComp>

    </div>

    <Outlet />

  </CardComp>

  )
}

export default MoviesContainerComp;