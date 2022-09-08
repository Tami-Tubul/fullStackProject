import { Link, Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import * as React from 'react';
import '../UI/style.css'


const MainPageComp = () => {


    const storeData = useSelector(state => state)

    const [tabActice, setTabActive] = useState({})

    return (<>

        {storeData.loginUser && <h2> Welcome {storeData.loginUser.firstName + " " + storeData.loginUser.lastName}</h2>}
         <ul>
            <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="movies" onClick={() => setTabActive({ users: "active" })}>Movies</Link>
            <Link className={`tab ${tabActice.subscriptions === undefined ? "" : "active"}`} to="subscriptions" onClick={() => setTabActive({subscriptions: "active" })}>Subscriptions</Link>
            {storeData.loginUser?.userName === "Admin" && <Link className={`tab ${tabActice.userManagement === undefined ? "" : "active"}`} to="userManagement" onClick={() => setTabActive({userManagement: "active" })} >User Management</Link>}
            <Link className="logOutLink" to="/" >Log Out</Link>
        </ul>
        <Outlet />

    </>)
}

export default MainPageComp;
