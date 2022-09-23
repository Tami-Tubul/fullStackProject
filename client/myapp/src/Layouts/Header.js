import "./Header.css"
import NavComp from "./Nav";
import doorIcon from '../Images/door.png'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComp = () => {

    const navigate = useNavigate()
    const storeUsers = useSelector(state => state.usersReducer)

    const logOut = () => {
        sessionStorage.clear();
        navigate("/auth/login")
    }

    return (
        <>
            <header>
                <h1>Cinema Website</h1>
                {storeUsers.connectedUser !== undefined && <>
                    <NavComp />
                    <img className="door-icon" src={doorIcon} width="50" onClick={logOut} />
                </>}

            </header>
            <div className='flat-line'></div>
        </>
    )

}

export default HeaderComp;