import { useEffect } from "react";
import { NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CardComp from "../../UI/Card";
import EditMovieComp from "./EditMovie";

const MoviesContainerComp = () => {

  const navigate = useNavigate()

  const url = useLocation().pathname

  useEffect(() => {

   navigate("/movies/allMovies") // active the all movies tab

  }, [])


  return (<CardComp width="60%">
    <h2>Movies</h2>
    <hr></hr>

    {
      !url.includes("editMovie") ?
        <>
          <nav>
            <ul>
              <li><NavLink to="allMovies" className={ navData => navData.isActive ? "active" : ''}>All Movies</NavLink></li>
              <li><NavLink to="addMovie" className={navData => navData.isActive ? "active" : ''}>Add Movie</NavLink></li>
            </ul>
          </nav>

          <Outlet />
        </>

        :
        <Routes>
          <Route path='editMovie/:id' element={<EditMovieComp />} />
        </Routes>



    }
  </CardComp>

  )
}

export default MoviesContainerComp;