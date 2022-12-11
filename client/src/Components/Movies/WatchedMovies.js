import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonComp from "../../UI/Button";

const WatchedMoviesComp = ({ memberID }) => {

    const [watchedMoviesForMember, setWatchedMoviesForMember] = useState()
    const subscriptions = useSelector(state => state.subscriptionsReducer.subscriptions)

    useEffect(() => {
        let moviesForMember = subscriptions && subscriptions.find(subs => subs.memberId == memberID)?.movies;
        setWatchedMoviesForMember(moviesForMember)
    }, [subscriptions, memberID])


    return (
        <div className="subscribe-border">
            <h4>Movies Watched</h4>

            <ButtonComp type="button" width="max-content" height="25px" >Subscribe to new movie</ButtonComp>
            
            <ul>
                {
                    watchedMoviesForMember && watchedMoviesForMember.map(m => {
                        const [onlyDate] = m?.date?.toString().split('T');
                        return <li key={m.movieId}>{[onlyDate]}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default WatchedMoviesComp;