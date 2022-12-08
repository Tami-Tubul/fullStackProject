import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import utils from "../../Utilities/utils"
import toast from 'toast-me';
import ButtonComp from "../../UI/Button";


const MovieComp = ({movieData}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const deleteMovie = async() => {
      let status = await utils.deleteItem("http://localhost:5000/api/movies" , movieData._id)
       if (status.data === "deleted!") {
         dispatch({ type: "DELETE_MOVIE", payload: movieData._id })
         toast("The movie was deleted!", { duration: 3000 })

       }
    }

  return (

    <div className="content-box">
      <div className="text-box">
        <p><strong>Name:</strong>  {movieData.name} , { new Date(movieData.premiered).getFullYear() }</p>
        <p><strong>Genres:</strong> {movieData?.genres?.map((g,index) => index > 0 ? `, "${g}"` : `"${g}"` )}</p>
        <img src={movieData.image} alt={movieData.name}/>
      </div>

      <div className="actions-box">
        <ButtonComp type="button" width="20%" height="27px" onClick={() => navigate("/movies/editMovie/" + movieData._id)}>Edit</ButtonComp>{" "}
        <ButtonComp type="button" width="20%" height="27px" onClick={deleteMovie} >Delete</ButtonComp>
      </div>

    </div>
  )
}

export default MovieComp;