import "./Header.css"
import NavComp from "./Nav";
import doorIcon from '../Images/door.png'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authService from "../Utilities/authService";

const HeaderComp = (props) => {

    const navigate = useNavigate()
    const storeUsers = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()


    const logOut = () => {
        sessionStorage.clear();
        dispatch({ type: "CONNECTED_USER", payload: authService.getUser() })
        navigate("/auth/login")
    }

    return (
        <>
            <header>
                <h1>Cinema Website</h1>
                {storeUsers.connectedUser &&
                    <>
                        <NavComp isAdmin={props.isAdmin} />
                        <span className="user-name">
                            <i>Hello {props.fname} {props.lname}</i>
                            <img className="door-icon" src={doorIcon} width="50" onClick={logOut} />
                        </span>
                    </>}

            </header>
            <div className='flat-line'></div>
        </>
    )

}

export default HeaderComp;