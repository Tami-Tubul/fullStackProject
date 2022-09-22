import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import * as React from 'react';
import '../UI/style.css'
import authService from "../Utilities/authService";


const MainPageComp = () => {


    const storeUsers = useSelector(state => state.usersReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [tabActice, setTabActive] = useState({})

    useEffect(() => {
        let token = authService.getToken()
        if (token == null) {
            navigate("/")
        }
        dispatch({ type: "CONNECTED_USER", payload: sessionStorage["user"] })

    }, [])

    return (<>
        {storeUsers.connectedUser && <h2> Welcome {storeUsers.connectedUser.firstName + " " + storeUsers.connectedUser.lastName}</h2>}
        <ul>
            <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="movies" onClick={() => setTabActive({ users: "active" })}>Movies</Link>
            <Link className={`tab ${tabActice.subscriptions === undefined ? "" : "active"}`} to="subscriptions" onClick={() => setTabActive({ subscriptions: "active" })}>Subscriptions</Link>
            {storeUsers.connectedUser?.userName === "Admin" && <Link className={`tab ${tabActice.userManagement === undefined ? "" : "active"}`} to="userManagement" onClick={() => setTabActive({ userManagement: "active" })} >User Management</Link>}
            <Link className="logOutLink" to="/" onClick={() => sessionStorage.clear()}>Log Out</Link>
        </ul>
        <Outlet />

    </>)
}

export default MainPageComp;
