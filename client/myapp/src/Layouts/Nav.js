import { NavLink } from "react-router-dom";
import "./Nav.css"

const NavComp = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/movies" className={navData => navData.isActive ? "active" : '' }>Movies</NavLink></li> 
                <li><NavLink to="/subscriptions" className={navData => navData.isActive ? "active" : '' }>Subscriptions</NavLink></li> 
                <li><NavLink to="/usersManagement" className={navData => navData.isActive ? "active" : '' }>Users Management</NavLink></li> 
            </ul>

        </nav>
        
    )

}

export default NavComp;
