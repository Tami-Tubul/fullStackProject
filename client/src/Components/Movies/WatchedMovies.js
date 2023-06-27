import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import utils from "../../Utilities/utils";
import toast from 'toast-me';
import authService from "../../Utilities/authService";


const WatchedMoviesComp = ({ memberID }) => {

    const subscriptions = useSelector(state => state.subscriptionsReducer.subscriptions)
    const movies = useSelector(state => state.moviesReducer.movies)
    const dispatch = useDispatch()

    const { pathname } = useLocation();

    const [watchedMoviesForMember, setWatchedMoviesForMember] = useState([])
    const [openSubs, setSubs] = useState(false)
    const [newWatchMovie, setNewWatchMovie] = useState({ movieId: "", date: "" })


    useEffect(() => {

        let moviesForMember = subscriptions && subscriptions.find(subs => subs.memberId == memberID)?.movies;
        setWatchedMoviesForMember(moviesForMember)

    }, [])

    const goToMovie = (movie) => {
        dispatch({ type: "SUBSCRIBE_MOVIE", payload: movie })
    }


    const handleSubs = async () => {
        //הוספת הסרט לטבלת מנויים - זו תהיה הרשומה הראשונה בטבלה!!
        setWatchedMoviesForMember([...watchedMoviesForMember, newWatchMovie]) // add the new movie to comp state
        try {
            const token = authService.getToken();

            let status = await utils.addItem("http://localhost:5000/api/subscriptions", { memberId: memberID, movies: watchedMoviesForMember },token)
            if (status.data.message === "created!") {

                dispatch({ type: "ADD_WATCHED_MOVIE", payload: { _id: memberID, movies: watchedMoviesForMember } })

                toast("The watched movie was created!", { duration: 3000 })
            }
        } catch (error) {
            toast(error.response.data.message, { duration: 3000 })
        }


    }


    return (
        <div className="subscribe-border">
            <h4>Movies Watched</h4>

            <ButtonComp type="button" width="max-content" height="25px" onClick={() => setSubs(!openSubs)}>Subscribe to new movie</ButtonComp>

            {
                openSubs &&
                <div className="subscribe-border">
                    <h5>Add a new movie</h5>

                    <select onChange={e => setNewWatchMovie({ ...newWatchMovie, movieId: e.target.value })}>
                        {
                            movies.map(m => {
                                return <option key={m._id} value={m._id}>{m.name}</option>
                            })
                        }
                    </select>
                    <input id="premiered" type="date" label="Premiered:" required onChange={e => setNewWatchMovie({ ...newWatchMovie, date: e.target.value })} />

                    <ButtonComp type="button" width="100%" height="25px" onClick={handleSubs}>Subscribe</ButtonComp>


                </div>
            }


            <ul>
                {
                    watchedMoviesForMember && watchedMoviesForMember.map(m => {
                        let thisMovie = movies.find(movie => movie._id == m.movieId)
                        let movieName = thisMovie?.name;
                        const [onlyDate] = m?.date?.toString().split('T');
                        //return <li key={m._id}><a onClick={() => goToMovie(thisMovie)}>{movieName}</a>  , {[onlyDate]}</li>
                        return <li key={m._id}><Link to={"/movies/allMovies"} state={{ previousPath: pathname }} onClick={() => goToMovie(thisMovie)}>{movieName}</Link>, {[onlyDate]}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default WatchedMoviesComp;