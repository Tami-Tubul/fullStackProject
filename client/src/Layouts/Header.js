import "./Header.css"
import NavComp from "./Nav";
import doorIcon from '../Images/door.png'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authService from "../Utilities/authService";

const HeaderComp = ({ connectedUserData }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const connectedUser = useSelector(state => state.usersReducer.connectedUser)


    const logOut = () => {
        sessionStorage.clear();
        dispatch({ type: "CONNECTED_USER", payload: authService.getUser() });
        navigate("/auth/login");
    }

    return (
        <>
            <header>
                <h1>Cinema Website</h1>
                {connectedUser && <>
                    <NavComp userRole={connectedUserData.role} />
                    <span className="user-name">
                        <i>Hello {connectedUserData.firstName} {connectedUserData.lastName}</i>
                        <img className="door-icon" src={doorIcon} width="50" onClick={logOut} title="Log out" alt="Log out" />
                    </span>
                </>}

            </header>
            <div className='flat-line'></div>
        </>
    )

}

export default HeaderComp;