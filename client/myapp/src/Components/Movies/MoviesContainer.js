import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import CardComp from "../../UI/Card";
import utils from "../../Utilities/utils";

const MoviesContainerComp = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {

    //load users
    const getAllMovies = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/movies")
      dispatch({ type: "LOAD_MOVIES", payload: resp.data })
    }
    getAllMovies()

  }, [dispatch])


  return (<CardComp width="60%">
    <h2>Movies</h2>
    <hr></hr>
   
    <div>
    
      <nav>
        <ul>
          <li><NavLink to="allMovies" className={navData => navData.isActive ? "active" : ''}>All Movies</NavLink></li>
          <li><NavLink to="addMovie" className={navData => navData.isActive ? "active" : ''}>Add Movie</NavLink></li>
        </ul>

      </nav>


    </div>

    <Outlet />

  </CardComp>

  )
}

export default MoviesContainerComp;