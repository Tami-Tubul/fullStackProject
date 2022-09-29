import { NavLink } from "react-router-dom";
import "./Nav.css"

const NavComp = (props) => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/movies" className={navData => navData.isActive ? "active" : '' }>Movies</NavLink></li> 
                <li><NavLink to="/subscriptions" className={navData => navData.isActive ? "active" : '' }>Subscriptions</NavLink></li> 
                {props.uname === "Admin" && <li><NavLink to="/usersManagement" className={navData => navData.isActive ? "active" : '' }>Users Management</NavLink></li> }
            </ul>

        </nav>
        
    )

}

export default NavComp;
