import { FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';


const EditMovieComp = () => {

  const movies = useSelector(state => state.moviesReducer.movies)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [movie, setMovie] = useState({ name: "", genres: "", image: "", premiered: "" })


  useEffect(() => {

    let movieForEdit = movies && movies.find(movie => movie._id === params.id)
    const [onlyDate] = movieForEdit?.premiered?.split('T'); //set only date without hour in the date field
    setMovie({ ...movieForEdit, premiered: [onlyDate] })

  }, [movies, params.id])

  const updateMovie = async (e) => {

    e.preventDefault();

    //convert genres string to array (without spaces)
    let genresStr = movie.genres;
    let genresArr = genresStr.split(",")
    let final_genres = genresArr.map(x => x.trim())

    let updatedMovie = { ...movie, genres: final_genres };

    let status = await utils.editItem("http://localhost:5000/api/movies", params.id, updatedMovie)
    console.log(status.data);
    if (status.data == "updated!") {

      dispatch({ type: "UPDATE_MOVIE", payload: updatedMovie })

      toast("The movie was updated!", { duration: 3000 })

      navigate("/movies/allMovies")
    }

  }

  const cancelFunc = () => {
    navigate("/movies/allMovies")
  }




  return (<>
    <h3>Edit Movie</h3>
    <div className="scroll-div">
      <form className="form" onSubmit={e => updateMovie(e)}>
        <FormGroup>
          <FormControlComp id="name" type="text" label="Name:" value={movie?.name} required onChange={e => setMovie({ ...movie, name: e.target.value })} />
          <FormControlComp id="genres" type="text" label="Genres:" value={movie?.genres} required onChange={e => setMovie({ ...movie, genres: e.target.value })} />
          <FormControlComp id="image" type="text" label="Image Url:" value={movie?.image} required onChange={e => setMovie({ ...movie, image: e.target.value })} />
          <FormControlComp id="premiered" type="date" label="Premiered:" value={movie?.premiered} required onChange={e => setMovie({ ...movie, premiered: e.target.value })} />

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Update</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc}>Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </div>
  </>
  )
}

export default EditMovieComp;