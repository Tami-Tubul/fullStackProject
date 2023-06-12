import { FormGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl"
import utils from "../../Utilities/utils";
import toast from 'toast-me';


const AddMovieComp = () => {

  const permissions = useSelector(state => state.usersReducer.connectedUser.permissions)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [movie, setMovie] = useState({ name: "", genres: "", image: "", premiered: "" })

  const addMovieFunc = async (e) => {

    e.preventDefault();

    //convert genres string to array (without spaces)
    let genresStr = movie.genres;
    let genresArr = genresStr.split(",")
    let final_genres = genresArr.map(x => x.trim())

    let newMovie = { ...movie, genres: final_genres };

    try {

      let status = await utils.addItem("http://localhost:5000/api/movies", newMovie)

      if (status.data.message === "created!") {

        dispatch({ type: "ADD_MOVIE", payload: { ...newMovie, _id: status.data.movieID } })

        toast("The movie was created!", { duration: 3000 })

        navigate("/movies/allMovies")
      }
    } catch (error) {
         toast(error.response.data.message, { duration: 3000 })
    }

  }

  const cancelFunc = () => {
    navigate("/movies/allMovies")

  }

  return (<>
    {permissions.find(perm => perm === 'Create Movies') ?
      <>
        <h3>Add Movie</h3>
        <div className="scroll-div">
          <form className="form" onSubmit={addMovieFunc}>
            <FormGroup>
              <FormControlComp id="name" type="text" label="Name:" required onChange={e => setMovie({ ...movie, name: e.target.value })} />
              <FormControlComp id="genres" type="text" label="Genres:" required onChange={e => setMovie({ ...movie, genres: e.target.value })} />
              <FormControlComp id="image" type="text" label="Image Url:" required onChange={e => setMovie({ ...movie, image: e.target.value })} />
              <FormControlComp id="premiered" type="date" label="Premiered:" required onChange={e => setMovie({ ...movie, premiered: e.target.value })} />

              <br />

              <ButtonComp typeBtn='submit' variant="contained" color="default" >Save</ButtonComp><br />
              <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc}>Cancel</ButtonComp><br />

            </FormGroup>
          </form>
        </div>
      </> : "No permissions to add movies for this user"}
  </>)
}

export default AddMovieComp;