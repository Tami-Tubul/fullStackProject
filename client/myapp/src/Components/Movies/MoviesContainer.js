import { NavLink, Outlet } from "react-router-dom";
import CardComp from "../../UI/Card";

const MoviesContainerComp = () => {


  return (<CardComp width="60%">
            <h2>Movies</h2>
            <hr></hr>

            <nav>
                <ul>
                    <li><NavLink to="allMovies" className={navData => navData.isActive ? "active" : ''}>All Movies</NavLink></li>
                    <li><NavLink to="addMovie" className={navData => navData.isActive ? "active" : ''}>Add Movie</NavLink></li>
                </ul>
            
            </nav>

            <Outlet/>

          </CardComp>

  )
}

export default MoviesContainerComp;