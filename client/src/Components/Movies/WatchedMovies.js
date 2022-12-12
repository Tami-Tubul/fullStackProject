import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonComp from "../../UI/Button";

const WatchedMoviesComp = ({ memberID }) => {

    const subscriptions = useSelector(state => state.subscriptionsReducer.subscriptions)
    const movies = useSelector(state => state.moviesReducer.movies)

    const [watchedMoviesForMember, setWatchedMoviesForMember] = useState()


    useEffect(() => {

        let moviesForMember = subscriptions.find(subs => subs.memberId == memberID)?.movies;
        // let watchedMovies = movies.filter(movie => {
        //      return moviesForMember.find(m => m.movieId == movie._id)
        // })

       setWatchedMoviesForMember(moviesForMember)

    }, [subscriptions, memberID, movies])


    return (
        <div className="subscribe-border">
            <h4>Movies Watched</h4>

            <ButtonComp type="button" width="max-content" height="25px" >Subscribe to new movie</ButtonComp>

            <ul>
                {
                    watchedMoviesForMember && watchedMoviesForMember.map(m => {
                        const [onlyDate] = m?.date?.toString().split('T');
                        return <li key={m.movieId}>{m.name} , {[onlyDate]}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default WatchedMoviesComp;