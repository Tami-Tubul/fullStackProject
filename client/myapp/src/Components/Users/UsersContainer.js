import { NavLink, Outlet } from "react-router-dom";

const UsersContainerComp = () => {


    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="users" className={navData => navData.isActive ? "active" : ''}>All Users</NavLink></li>
                    <li><NavLink to="addUser" className={navData => navData.isActive ? "active" : ''}>Add User</NavLink></li>
                </ul>
            </nav>
            
            
            <Outlet/>

        </>
    )
}

export default UsersContainerComp;