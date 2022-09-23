import { NavLink, Outlet } from "react-router-dom";
import CardComp from "../../UI/Card";

const UsersManagementComp = () => {


    return (
        <CardComp>
            <h2>Users</h2>
            
            <Outlet/>

        </CardComp>
    )
}

export default UsersManagementComp;